import React, {useContext, useEffect, useRef, useState} from 'react';
import mainContext from "../context/mainContext";
import PostCard from "../components/PostCard";

const MainPage = () => {
    const context = useContext(mainContext)


    useEffect(() => {
            context.setView2('main')
        },
        [])


    return (
        <div className='registerPageWrap d-center'>
            {context.getPost.map((x, i) => <PostCard key={i} x={x} i={i}/>)}
        </div>
    );
};

export default MainPage;