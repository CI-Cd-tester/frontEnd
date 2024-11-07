import React, {useState} from "react";
import { encrypt, decrypt } from "../EncryptingDecryptingService";
import './userInteraction.css'

const UserInteraction: React.FC  = () => {

    const [input, setInput] = useState('');
    const [encryptedText, setEncryptedText]= useState('');
    const [decryptedText, setDecryptedText]= useState('');
    const [password, setPassword]=useState('');

const encryptHandle = ()=>{
    if(!password) return alert("Pleas Enter the correct password");
    const encryptedText= encrypt(input, password);
    setEncryptedText(encryptedText);
    setDecryptedText('');

} 


const decryptHandle = ()=>{
    if(!password) return alert("Pleas Enter the correct password");
    const decryptedText = decrypt(encryptedText, password);
    setDecryptedText(decryptedText);

} 

return ( 
    <div className="UserInteractionWraper">

    <h1>Encrypt/Decrypt</h1>

    <div className="inputtField">
        <input 
                className="inputField"
                type="password" 
                value={password}
               onChange={(e)=>setPassword(e.target.value)}
               placeholder="Enter decryption password" 
            />
    </div>

    <div className="inputtField">
        <input 

                className="input"
                type="text" 
                value={input}
               onChange={(e)=>setInput(e.target.value)}
               placeholder="Enter text to encrypt: " 

              /> 
              <br />
               <button className="button" onClick={encryptHandle}>
            Encrypt 
        </button>
    </div>

    <div className="resault">
        <p>
            Encrypted text: {encryptedText}</p>
            {encryptedText &&(
            <button className="button" 
            onClick={decryptHandle}> Decrypt </button>
        )}

        {decryptedText && <p>Decrypted text: {decryptedText} </p>}
      
    </div>


</div>

);


}

export default UserInteraction;