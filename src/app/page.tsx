'use client';

import React, { useEffect, useState } from 'react';
import MainPage from './main';
import ThemeSwitch from '@/components/ThemeSwitch';

function Main() {
     const [mounted, setMounted] = useState(false);

     useEffect(() => setMounted(true), []);

     if (!mounted) return null;

     return (
          <div className='flex flex-col justify-between h-screen py-10'>
               <ThemeSwitch />
               <MainPage />
               <div></div>
          </div>
     );
}

export default Main;
