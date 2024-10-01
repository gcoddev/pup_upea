import * as CryptoJS from 'crypto-js'
import { keys } from '../constants/keys.constants'

export function encrypt(text: string): string {
    const encrypted = CryptoJS.AES.encrypt(text, keys.encryption).toString();

    return encrypted
}

export function decrypt(encryptedText: string): string {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, keys.encryption);

    return decrypted.toString(CryptoJS.enc.Utf8);
}