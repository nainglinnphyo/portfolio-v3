import Link from 'next/link'

export default function MainPage() {
     return (
          <div className='flex flex-col w-full h-auto justify-center items-center text-center hover:cursor-pointer'>
               <h2 className='font-bold flex-row'>Welcome from <a className='dark:text-green-400 text-green-600 font-bold'>farymap.com</a></h2>
               <p>We're excited to announce that our new website is launching soon, featuring our own map service, building on the innovative approach that powers of <a href="https://farytaxi.com" target='_blank' className='dark:text-green-400 text-green-600 font-bold'>farytaxi.com</a>. We're working hard to bring you a seamless and user-friendly experience.</p>
          </div>
     )
}