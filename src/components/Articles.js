import React, { useEffect, useState } from 'react';
import SkeletonArticles from '../skeletons/SkeletonArticles';

const Articles = () => {
    const [articles, setArticles] = useState(null);
    useEffect(() => {
        setTimeout(async () => {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await result.json();
            setArticles(data);
        }, 5000);
    });
    return (
        <div className='articles'>
            <h2>Articles</h2>
            {articles && articles.map(articles => (
                <div className='article' key={articles.id}>
                    <h3>{ articles.title }</h3>
                    <o>{ articles.body }</o>
                </div>
            ))}
            {!articles && [1,2,3,4,5].map(item => <SkeletonArticles theme='light' />)}
        </div>
    );
};
export default Articles;