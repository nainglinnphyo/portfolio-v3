import React from 'react'
import SubExp from './SubExp'
import { exp } from '@/utils/exp'

function Exp() {
     return (
          <div className='space-y-8 max-sm:space-y-4'>
               <h1 className='text-lg font-bold'>Experience_</h1>
               {exp.map((e) => {
                    return (
                         <SubExp key={e.title} company={e.company} jd={e.jd} title={e.title} workDate={e.workDate} />
                    )
               })}
          </div>
     )
}

export default Exp