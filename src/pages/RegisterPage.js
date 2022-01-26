import React, {useContext, useEffect, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const context = useContext(mainContext)
    const nav = useNavigate()

    useEffect(() => {
            context.setView('register')
        },
        [])

    const name = useRef()
    const pass1 = useRef()
    const pass2 = useRef()

    function createUser() {
        if (pass1.current.value !== pass2.current.value) {
            return alert('Passwords do not match')
        } else {
            const NewObj = {
                name: name.current.value,
                pass1: pass1.current.value,
                pass2: pass2.current.value
            }
            context.setNewUser([...context.getNewUser, NewObj])
            alert('Account registered!')
            nav('/login')
        }

    }


    return (
        <div className='registerPageWrap d-center'>
            <div className='Form d-center'>
                <h1>User Registration</h1>
                <input type="text" placeholder='Username' ref={name}/>
                <input type="password" placeholder='Password' ref={pass1}/>
                <input type="password" placeholder='Repeat Password' ref={pass2}/>
                <button onClick={createUser}>Register
                </button>

            </div>
        </div>
    );
};

export default RegisterPage;