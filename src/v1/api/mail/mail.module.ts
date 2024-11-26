import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mail } from './entities/mail.entity';
import { OrdenModule } from '../orden/orden.module';
import { OrdenConceptoModule } from '../orden-concepto/orden-concepto.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from '../auth/users/users.module';

@Module({
  controllers: [MailController],
  providers: [MailService],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([Mail]),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        transport: {
          host: config.get('MAIL_HOST'),
          port: config.get('MAIL_PORT'),
          auth: {
            user: config.get('MAIL_USER'),
            pass: config.get('MAIL_PASSWORD'),
          },
        },
        defaults: {
          from: config.get('MAIL_FROM'),
        },
      }),
    }),
    OrdenModule, OrdenConceptoModule, UsersModule
  ],
  exports: [MailService]
})
export class MailModule { }
