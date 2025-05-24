'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { FirebaseUser } from '@/types';
import LogoutButton from '@/components/LogoutButton';
import { auth } from '@/lib/firebase';

export default function HomePage() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser as FirebaseUser);
      } else {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-black">
          Hey, {user.displayName || 'User'}! You’re successfully logged in
        </h1>
        <LogoutButton />
      </div>
    </div>
  );
}