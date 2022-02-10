import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const {signInWithGoogle, user}=useAuth();

    return (
        <div>
            <h3>{user.email}</h3>
        </div>
    );
};

export default Home;