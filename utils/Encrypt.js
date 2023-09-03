import { JSEncrypt } from "jsencrypt"

export const encrypt = (publicKey, message) => {
    let enc = new JSEncrypt();
    enc.setPublicKey(publicKey);
    return enc.encrypt(message);
}


