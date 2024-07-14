'use client'
import { useEffect, useState } from 'react';

export default function LoadingBar({ mount, setMount }: LoadingBarProps) {
     const [progress, setProgress] = useState(0);

     useEffect(() => {
          // if (!mount) return;

          const increment = 1; // The amount of progress increment per interval
          const intervalDuration = 10; // Interval duration in milliseconds

          const interval = setInterval(() => {
               setProgress((prev) => {
                    if (prev < 100) {
                         return prev + increment;
                    } else {
                         clearInterval(interval);
                         setMount(false);
                         return 100;
                    }
               });
          }, intervalDuration);

          return () => clearInterval(interval);
     }, [mount, setMount]);

     return (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
               <div className="relative h-2 w-1/4 max-sm:w-1/2">
                    <div
                         className="absolute left-0 bottom-0 h-full bg-blue-500 transition-all"
                         style={{ width: `${progress}%` }}
                    ></div>
               </div>
          </div>
     );
}
