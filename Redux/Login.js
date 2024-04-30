import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/user'; 

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name: 'John Doe', age: 30, email: 'john@example.com' }));
  };

  return (
    <div>
      <button onClick={handleLogin}>
        Login page
      </button>
    </div>
  );
}

export default Login;
