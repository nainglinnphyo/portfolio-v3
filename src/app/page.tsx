/* eslint-disable react/no-unescaped-entities */

import Home from '@/components/Home';
import Exp from '@/components/Exp';
import Link from 'next/link';
import React from 'react';
import Footer from '@/components/Footer';

function Main() {
     return (
          <div className='flex flex-col space-y-10'>
               <Home />
               <Exp />
               <Footer />
          </div>
     );
}

export default Main;
