import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { TailSpin } from 'react-loader-spinner';
import auth from '../../firebase.init';
import LogInBox from '../Authentication/LogIn/LogInBox';
import Post from './Post'


const News = () => {
    const [news, setNews] = useState([])
    const [user] = useAuthState(auth)
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const url = 'data.json'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setNews(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <div className="spinner">
            <TailSpin
                height="80"
                width="80"
                color="#ff9412"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    } else {
        return (
            <div>
                <h1>Welcome to our news feed.</h1>
                {
                    user ? news.map(post => <Post post={post}></Post>) : <LogInBox />
                }
            </div>
        );
    }
};

export default News;