import React from 'react';
import { useState } from 'react';




function Core() {
  const [count, setCount] = useState(0);
  if(count<0){
    setCount(0)
  }
  return (
    <div >
        <div className="head ">
          <h1 className='text-5xl mt-20 font-extrabold'>THIS IS THE COUNTER APP</h1></div>
          <div className="container my-24">
            <h1 className='mb-60  text-8xl font-black'>{count}</h1>
            <button className='btn mx-16 inline bg-green-400 text-stone-800 px-10 py-8 shadow-xl font-semibold text-3xl' onClick={()=>setCount(count+1)}>Increement</button>

            <button className='btn mx-16 inline bg-green-400 text-stone-800 px-10 py-8 shadow-xl font-semibold text-3xl' onClick={()=>setCount(count -1)}>Decreement</button>

            <button className='btn inline mx-16 bg-green-400 text-stone-800 px-10 py-8 shadow-xl font-semibold text-3xl' onClick={()=>setCount(0)}>Reset</button>
            
          </div>
          
    </div>
  )
}

export default Core;
