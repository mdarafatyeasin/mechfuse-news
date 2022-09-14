import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Post from './Post'


const News = () => {
    const [user] = useAuthState(auth)
    const [ news, setNews ] = useState([])
    useEffect(()=>{
        const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=55f124beb7584259833b199d76188674'
        fetch (url)
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])
    console.log(news)
    return (
        <div>
            {
                user ? news.articles.map(post => <Post post = {post}></Post>) : <Link to="/login">Log In</Link>
            }
        </div>
    );
};

export default News;