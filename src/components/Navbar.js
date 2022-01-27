import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import {Link} from "react-router-dom";
import LogOut from "../context/LogOut";


const Navbar = () => {
    const context = useContext(mainContext)
    return (
        <div className='navBarWrap'>
            <div className='navOptionsWrap'>
                {(context.getView !== 'login' && context.getView2 === '') && <h1><Link to='/login'>Login</Link></h1>}
                {(context.getView !== 'register' && context.getView2 === '') &&
                <h1><Link to='/register'>Register</Link></h1>}
                {context.getView2 === 'main' && <h1><Link to='/createPost'>Create post</Link></h1>}
                {context.getView2 === 'createPost' && <h1><Link to='/main'>Main page</Link></h1>}
            </div>
            <LogOut/>
        </div>
    );
};

export default Navbar;

