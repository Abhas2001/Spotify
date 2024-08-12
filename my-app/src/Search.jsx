import React, { useState } from 'react'
import Body from './Body';
import { data } from './data';



const Search = (value) => {
    
    
    const[stage,setstage] =useState('');
    function handlechange(e){
        setstage(e.target.value)

    }

    console.log(JSON.stringify(stage));

   const result = data.filter(function(data){
    return data.name===JSON.stringify(stage);
   });
  
   console.log(result);

//    console.log(result);
  return (
    <div className='bg-zinc-400 w-10 h-10'>
       <input  onInput={handlechange} className='w-25 h-12 '/>
         { stage.length>0??
             <Body value={JSON.stringify(stage)}/>

         }
    </div>
  )
}

export default Search
