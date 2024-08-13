import React, { useState } from 'react'
import Body from './Body';
import { data } from './data';
import './Search.css'


export const getfilterdata=(query,data)=>{

    if(!query){
        return data;
    }
    else

    return data.filter(song=>song.name.includes(query));

}




const Search = () => {
    const [query, setquery] = useState("");
      




    const filtereditems =getfilterdata(query,data);
   
   
  
    return (
        <div className='bg-zinc-400 w-10 h-10'>
            <input  onChange={e=>setquery(e.target.value)} className='w-25 h-12' />
          { query.length>0 && (
             
             <div className='total'>
             { 
           filtereditems.map((x)=>{
               return(
             
             <div className='box'>
               
              <div className='img'>
                 {x.name}
               </div>
            
               
               <div className='name'>
                 {x.name}
               </div>
          


               <div className='postion'>
                {x.name}
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
