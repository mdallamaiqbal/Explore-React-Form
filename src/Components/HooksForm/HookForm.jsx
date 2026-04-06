import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [email, emailOnChange] =useInputField('')
    const [password, PasswordOnChange]= useInputField('')
    const handleChange = e =>{
        e.preventDefault();
        console.log('submit', email, password);
        
    }
    return (
        <div>
             <form onSubmit={handleChange}>
                <input type="email" defaultValue={email} onChange={emailOnChange} name="email" placeholder='Email'/>
                <br />
                <input type="password" defaultValue={password} onChange={PasswordOnChange} name="password" placeholder='Password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;