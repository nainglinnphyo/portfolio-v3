/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link';
import React from 'react';

function Home() {
     return (
          <div>
               <div>
                    <h1 className='font-bold text-lg'>Naing Linn Phyo</h1>
                    <h2>Senior Backend Developer</h2>
               </div>
               <div className='max-sm:mt-10'>
                    <p>
                         I'm a backend developer and team lead at <Link
                              href='https://xsphere.co'
                              passHref
                              className='text-green-500 underline'
                         >
                              xsphere.co
                         </Link>, specializing in JavaScript, TypeScript, PHP, and Golang. With extensive
                         experience in both frontend and backend development, I excel in creating
                         powerful and responsive web applications. Currently, I lead the
                         development of <Link href='https://farytaxi.com' passHref className='text-green-500 underline'>
                              Fary Taxi
                         </Link> and Getbak, leveraging microservices technologies like gRPC and Redis to
                         build efficient and scalable solutions.
                    </p>
               </div>
          </div>
     );
}

export default Home;
