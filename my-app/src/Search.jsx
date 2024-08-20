import React, { useState } from 'react'
import Body from './Body';
import { data } from './data';
import './Search.css'







const Search = (props) => {
   
      




    const filtereditems =props.onInputchange(props.onQuerychange(),data);
   
   
  
    return (
        <div className='bg-zinc-400 w-10 h-10'>
            <input  onChange={props.onQuerychange()} className='w-25 h-12' />
          { props.onQuerychange().length>0 && (
             
             <div className='total'>
             { 
           filtereditems.map((x)=>{
               return(
             
             <div className='box'>
               
            
            
               
               <div className='name'>
                 {x.artists}
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
