import React, { useState } from 'react';

function UsersPage ({onUserSubmit}) {
    const [user, setUser] = useState({ name: '', lastName: '' });

    function handleSubmit () {

        const name = prompt('Введите ваше имя');
        const lastName = prompt('Введите вашу фамилию');

        if (name && lastName) {
            setUser({ name, lastName });
            onUserSubmit({ name, lastName });
        }
    };

    return (
        <div>
            <button onClick={handleSubmit}>Введите данные</button>
        </div>
    );
};

export default UsersPage;
