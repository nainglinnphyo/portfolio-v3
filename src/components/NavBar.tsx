'use client'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
     const pathname = usePathname()

     const getActiveClass = (path: string) => {
          return path === pathname ? 'active' : '';
     };

     return (
          <div className='flex justify-between py-6'>
               <nav>
                    <ul className='flex space-x-4'>
                         <li className={`underline-animation ${getActiveClass('/')}`}>
                              <Link href="/">
                                   Home
                              </Link>
                         </li>
                         <li className={`underline-animation ${getActiveClass('/about')}`}>
                              <Link href="/about">
                                   About
                              </Link>
                         </li>
                         <li className={`underline-animation ${getActiveClass('/experience')}`}>
                              <Link href="/experience">
                                   Blog
                              </Link>
                         </li>
                    </ul>
               </nav>
               <div className='mt-1 h-full text-lg'>
                    <ThemeSwitch />
               </div>
          </div>
     );
};

export default Navbar;
