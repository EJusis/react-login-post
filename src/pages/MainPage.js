import React, {useContext, useEffect} from 'react';
import mainContext from "../context/mainContext";

const MainPage = () => {
    useEffect(() => {
            context.setView2('main')
        },
        [])
    const context = useContext(mainContext)
    return (
        <div className='registerPageWrap d-center'>
            {context.getPost.length > 0 && context.getPost.map((x, i) =>
                <div className="postWrap" key={i}>
                    <h1>{x.title}</h1>
                    <p>{x.description}</p>
                    <h3>Post author: {x.author}</h3>
                </div>
            )}

        </div>
    );
};

export default MainPage;