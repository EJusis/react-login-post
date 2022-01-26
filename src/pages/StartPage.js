import React, {useEffect, useContext} from 'react';
import mainContext from "../context/mainContext";

const StartPage = () => {
    const context = useContext(mainContext)
    useEffect(() => {
            context.setView('')
            context.setView2('')
        },
        [])
    return (
        <div className='registerPageWrap d-center'>
            <img src="https://i.kym-cdn.com/photos/images/newsfeed/000/531/557/a88.jpg" alt=""/>
        </div>
    );
};

export default StartPage;