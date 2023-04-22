import React, { useContext, useState } from 'react';
import { AuthContext } from './Provider';

const LoginForm = () => {
    const { state, dispatch } = useContext(AuthContext);
    const [email, setEmail] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: 'login', email });
    };

    const handleLogout = () => {
        dispatch({ type: 'logout' });
    };

    return (
        <div>
            {state.email ? (
                <div>
                    <p>Welcome, {state.email}!</p>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Log in</button>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
