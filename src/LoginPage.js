import React from 'react';
import './style.css';

function LoginPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold">Login</h2>

        <div className="mt-4">
          <input
            type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mt-4">
          <input
            type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <button
          id="email-login-button"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full"
        >
          Login
        </button>
        <div className="mt-4">Or</div>
        <button
          id="google-login-button"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
