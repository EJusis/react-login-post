import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const LogOut = () => {
    const context = useContext(mainContext)
    const nav = useNavigate()
    function logOut () {
        context.setCurrentUser()
        nav('/')
    }

    return (
        <button onClick={logOut}>Log out</button>
    );
};

export default LogOut;