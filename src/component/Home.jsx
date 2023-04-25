import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <p>Its home component.  contexApi: {user && <span>{user.displayName}</span>}</p>
        </div>
    );
};

export default Home;