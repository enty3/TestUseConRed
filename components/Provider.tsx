import React, { createContext, useReducer } from 'react';

type StateType = {
    email: string;
};

type ActionType = { type: 'login'; email: string } | { type: 'logout' };

const initialState: StateType = { email: '' };

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'login':
            return { email: action.email };
        case 'logout':
            return { email: '' };
        default:
            throw new Error('Unexpected action');
    }
};

export const AuthContext = createContext<{
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => {} });

const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export default Provider;
