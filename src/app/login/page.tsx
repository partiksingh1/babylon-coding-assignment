'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FirebaseUser } from '@/types';
import { loginUser, registerUser } from '@/lib/firebase';

export default function LoginPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
  
    if (isRegistering) {
      if (!fullName.trim()) {
        setError('Full name is required for registration');
        return;
      }
  
      if (!passwordRegex.test(password)) {
        setError(
          'Password must be at least 6 characters and include uppercase, lowercase, number, and special character'
        );
        return;
      }
    }
  
    try {
      let user: FirebaseUser;
      if (isRegistering) {
        user = await registerUser(email, password, fullName.trim());
      } else {
        user = await loginUser(email, password);
      }
      router.push('/');
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };
  
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl text-black font-bold mb-6 text-center">
          {isRegistering ? 'Register' : 'Login'}
        </h1>
        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                required={isRegistering}
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="mt-4 text-blue-500 hover:underline"
        >
          {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
        </button>
      </div>
    </div>
  );
}