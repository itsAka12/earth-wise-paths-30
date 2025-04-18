
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AuthForm type="login" />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
