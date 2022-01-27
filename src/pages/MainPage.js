import React, {useContext, useEffect} from 'react';
import mainContext from "../context/mainContext";

const MainPage = () => {
    const context = useContext(mainContext)

    useEffect(() => {
            context.setView2('main')
        },
        [])

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

    console.log(context.getCurrentUser)
    console.log(context.getPost)



    return (
        <div className='registerPageWrap d-center'>
            {context.getPost.length > 0 && context.getPost.map((x, i) =>
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


                </div>
            )}

        </div>
    );
};

export default MainPage;