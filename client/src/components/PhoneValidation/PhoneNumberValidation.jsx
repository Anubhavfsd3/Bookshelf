import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


export default function PhoneNumberValidation () {

    const [PhoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handleChange =(value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    }

    return (
        <div className= "flex-c bg-black text-2xl font-bold rounded-full ml-5 mr-7 p-2">
            <label className="bg-iv flex-c p-3 ml-5 mr-7 text-primary my-9">
               Which Country :
               <PhoneInput
                  country={'us'} 
                  type="text"
                  value= {PhoneNumber}
                  onChange={handleChange}
                    inputProps={{
                       required: true
                    }}
                /> 
            </label>
            <div className="flex-c text-black bg-ls text-2xlp-3">
              {! valid && <p>Enter a valid phone number</p>}
            </div>
          
        </div>
    )
}