import CryptoJS from 'crypto-js';



export const encrypt = ( text: string, password:string): string =>{
    const key= CryptoJS.SHA256(password).toString();

    return CryptoJS.AES.encrypt(text, key).toString();
}

export const decrypt = (encryptedText: string, password: string):string=>{
    const key = CryptoJS.SHA256(password).toString();
    const bytes= CryptoJS.AES.decrypt(encryptedText, key);

    return bytes.toString(CryptoJS.enc.Utf8);
}
