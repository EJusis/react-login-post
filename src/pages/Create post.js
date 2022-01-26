import React, {useContext, useEffect, useRef} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {

    const context = useContext(mainContext)
    const title = useRef()
    const description = useRef()
    const nav = useNavigate()
    useEffect(() => {
            context.setView2('createPost')
        },
        [])

    function createPost () {
        if(title.current.value.length < 4) {
            return alert(`Title must be at least 5 chars long! Description must be at least 10 characters long!`)
        } if (description.current.value.length < 9) {
            return alert(`Description must be at least 10 characters long!`)
        }
        else {
            const newObj = {
                title: title.current.value,
                description: description.current.value,
                author: context.getCurrentUser.name
            }
            context.setPost([...context.getPost, newObj])
            nav('/main')
        }
    }



    return (
        <div className='registerPageWrap d-center'>
            <div className='Form d-center'>
                <input type="text" placeholder='Title' ref={title}/>
                <input type="text" placeholder='Description' ref={description}/>
                <button onClick={() => createPost()}>Create post</button>

            </div>
        </div>
    );
};

export default CreatePost;