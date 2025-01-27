import React, { useState, useEffect } from 'react';
import SkeletonProfile from '../skeletons/SkeletonProfile';

const User = () => {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        setTimeout( async () => {
            const results = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await results.json();
            setProfile(data);
        },5000);
    });
    return (
        <div className='user'>
            <h2>User Details</h2>
            { profile && (
                <div className='profile'>
                <h3>{profile.username}</h3>
                <p>{ profile.email }</p>
                <a href={profile.website}>{ profile.website }</a>
                </div>
            )}
            {!profile && <SkeletonProfile />}
        </div>
    );
};

export default User;