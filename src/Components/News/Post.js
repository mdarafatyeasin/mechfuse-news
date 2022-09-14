import React from 'react';
import './Post.css'

const Post = (props) => {
    console.log(props.post)
    const { title, urlToImage, description, url } = props.post
    return (
        <div>
            <div className="post" data-aos="zoom-in-left">
                <div className="img">
                    <img src={urlToImage} alt="" />
                </div>
                <div className="text">
                    <div className="title">
                        <h2>{title}</h2>
                    </div>
                    <div className="read-more">
                        <p>{description}<br/><strong><a href={url} target="_blank">Read More</a></strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;