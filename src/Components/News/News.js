import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LogInBox from '../Authentication/LogIn/LogInBox';
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
    // console.log(news)
    return (
        <div>
            <h1>Welcome to our news feed.</h1>
            {
                user ? news.articles.map(post => <Post post = {post}></Post>) : <LogInBox/>
            }
        </div>
    );
};

export default News;