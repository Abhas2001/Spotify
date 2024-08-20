import React, { useState } from 'react'
import Body from './Body';
import { data } from './data';
import './Search.css'







const Search = (props) => {
   
      




    const filtereditems =props.onInputchange(props.query,data);
   
   
  
    return (
        <div className='bg-zinc-400 w-1 h-10'>
            <input  onChange={e=>props.setquery(e.target.value)} className='w-25 h-12' />
          { props.query.length>0 && (
             
             <div className='total'>
             { 
           filtereditems.map((x,index)=>{
               return(
             
             <div className='box'>
               
            
               <div>{index+1}</div>
               
               <div className='name'>
                 {x.artists}
                 
               </div>
          
        
               <div>
                  {x.Genre}
                 </div>

          
             </div>
            );
             })
             
}
           </div>
          )

          }
         
        </div>
    )
}

export default Search;
