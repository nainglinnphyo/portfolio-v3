/* eslint-disable react/no-unescaped-entities */

import Home from '@/components/Home';
import Exp from '@/components/Exp';
import Link from 'next/link';
import React from 'react';

function Main() {
     return (
          <div className='flex flex-col space-y-8'>
               <Home />
               <Exp />
          </div>
     );
}

export default Main;
