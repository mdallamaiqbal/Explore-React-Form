import React, { useState } from 'react';

const ControlledForm = () => {
    const [password, setPassword]=useState('');
    const [error,setError]=useState('');
    const handlePasswordOnChange= e=>{
        console.log(e.target.value);
        setPassword(e.target.value);
        // if(password.length < 6){
        //     setError('Password must be 6 character')
        // } else
        //     {setError('')

        //     }   
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('submit');
        if(password.length < 6){
            setError('Need 6 Character password')
        }else{
            setError('')
        }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" placeholder='Enter Email' />
                <br />
                <input type="password" onChange={handlePasswordOnChange} defaultValue={password} name="password" placeholder='Password' id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p><small>{error}</small></p>
        </div>
    );
};

export default ControlledForm;