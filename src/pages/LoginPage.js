import React, {useContext, useEffect, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const context = useContext(mainContext)
    const name = useRef()
    const pass = useRef()
    const nav = useNavigate()
    useEffect(() => {
            context.setView('login')
        },
        [])

    function logIn() {
        const validateUser = context.getNewUser.find(x => x.name === name.current.value && x.pass1 === pass.current.value)
        if (!validateUser) return alert('User credentials are incorrect')
        else {
            context.setCurrentUser(validateUser)
            alert('Logged in!')
            nav('/main')
        }
    }


    return (
        <div className='registerPageWrap d-center'>
            <div className="Form d-center">
                <h1>Log In</h1>
                <input type="text" placeholder='Username' ref={name}/>
                <input type="password" placeholder='Password' ref={pass}/>
                <button onClick={() => logIn()}>Login</button>
            </div>
        </div>
    );
};

export default LoginPage;