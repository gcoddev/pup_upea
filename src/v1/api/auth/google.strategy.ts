import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            scope: ['email', 'profile'],
            passReqToCallback: true, // Habilitar acceso al req
        });
    }

    authenticate(req: any, options?: any): void {
        const op = req.params.op || req.query.op;
        const id = req.params.id || req.query.id;

        const customOptions = {
            ...options,
            prompt: 'select_account',
            state: JSON.stringify({ op, id })
        };

        super.authenticate(req, customOptions);
    }

    async validate(req: any, accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const state = req.query.state ? JSON.parse(req.query.state) : {};
        const op = state.op;
        const idUser = state.id;

        const { id: googleId, name, emails, photos } = profile;

        const user = {
            googleId,
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken,
            op,
            idUser
        };

        done(null, user);
    }

}
