import React, { useState, useEffect } from 'react';

function MainPage  ({user})  {
    const [userState, setUserState] = useState({ name: '', lastName: '' });

    useEffect(() => {
        if (user) {
            setUserState(user);
        }
    }, [user]);

    return (
        <div>
            <h1>Добро пожаловать {userState.name} {userState.lastName} мы тебя ждали</h1>
        </div>
    );
};

export default MainPage;