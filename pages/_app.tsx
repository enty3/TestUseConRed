import React, { createContext, useContext, useReducer } from 'react';
import Provider from '@/components/Provider';
import '../styles/globals.css';
import LoginForm from '@/components/LoginForm';

const App = () => {
  return (
      <Provider>
        <div>
          <h1>Login form</h1>
          <LoginForm />
        </div>
      </Provider>
  );
};

export default App;
