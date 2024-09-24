
import React from 'react';
import Header from '@/components/Header/Header';
import LoginForm from '@/components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div>
        <Header  onSignOutClick={() => (false)}isUserLoggedIn={false}/>
        <h1 style={{textAlign:"center", marginTop:"5rem"}}>Login to user app</h1>
        <LoginForm/>
    </div>
  )
}

export default LoginPage;