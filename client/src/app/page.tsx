'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectToPage = () => {
      const accessToken = Cookies.get('access_token');
      const targetPage = accessToken ? '/dashboard' : '/auth';
      router.push(targetPage);
    };

    redirectToPage();
  }, [router]);

  return <div className="flex justify-center items-center h-screen">Loading...</div>;
};

export default HomePage;
