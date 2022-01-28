import React, {useContext, useEffect, useRef, useState} from 'react';
import mainContext from "../context/mainContext";

const PostCard = ({x, i}) => {
    const context = useContext(mainContext)
    const [getCommentToggle, setCommentToggle] = useState(`none`)
    const [getCommentDisplay, setCommentDisplay] = useState(false)
    const comment = useRef()

    function liked(i) {
        const isSameUser = context.getPost[i].likes.find(name => name === context.getCurrentUser.name)
        // !context.getPost[i].likes.includes(context.getCurrentUser.name ---------- include method can also be used
        if (!isSameUser) {
            context.getPost[i].likes.push(context.getCurrentUser.name)
            context.setPost([...context.getPost])
        }
    }

    function disliked(i) {
        const isSameUser = context.getPost[i].likes.find(name => name === context.getCurrentUser.name)
        if (isSameUser) {
            context.getPost[i].likes = context.getPost[i].likes.filter(x => x !== context.getCurrentUser.name)
            context.setPost([...context.getPost])
        }
    }

    function addNewComment(i) {
        const newComment = {
            comment: comment.current.value,
            author: context.getCurrentUser.name
        }
        context.getPost[i].comments.push(newComment)
        context.setPost([...context.getPost])
        comment.current.value = ''
        setCommentToggle('none')
    }

    console.log(context.getPost)

    return (
        <div>
            <div className='registerPageWrap d-center'>
                <div className="postWrap" key={i}>
                    <h1>{x.title}</h1>
                    <p>{x.description}</p>
                    <h3>Post author: {x.author}</h3>
                    <p>Likes: {x.likes.length}</p>

                    {x.author !== context.getCurrentUser.name && <div>
                        {!x.likes.includes(context.getCurrentUser.name) &&
                        <button onClick={() => liked(i)}>Like</button>}
                        {x.likes.includes(context.getCurrentUser.name) &&
                        <button onClick={() => disliked(i)} className='clickedBtn'>Dislike</button>}
                    </div>}


                    <div className='commentButtons'>
                        <button onClick={() => setCommentToggle(`block`)}>Add comment</button>
                        <button onClick={() => setCommentDisplay(!getCommentDisplay)}>Show comments</button>
                    </div>
                    <div style={{display: `${getCommentToggle}`}} className='commentCreate'>
                        <input type="text" ref={comment} placeholder='Comment something..'/>
                        <button onClick={() => addNewComment(i)}>Post</button>
                    </div>


                    {getCommentDisplay &&
                    <div className='commentSection'>
                        {x.comments.map((x, i) =>
                            <div key={i} className='commentInside'>
                                <p>{x.comment}</p>
                                <p>By: {x.author}</p>
                            </div>
                        )}
                    </div>

                    }


                </div>

            </div>
        </div>
    );
};

export default PostCard;