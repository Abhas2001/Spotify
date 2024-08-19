import React from 'react'

import './Header.css'
import { useState } from 'react';
import './Body.css'
import Show from './Show';
import Album from './Album';
import Header from './Header';
import {Link} from 'react-router-dom';

import {data} from './data';





const Body = () => {
     
     const[Show,setisShow]=useState(0);
     

    
     
  return (
    
    <div>
       
        <Header value={data}/>
         
         <div className='main'>
          <div className='ayush'>
              <div className='header'>
                <div className='partist'>profile artists</div>
                <div className='btn' onClick={()=>setisShow(1)}> <Link to='/all' >Show all</Link></div>
              </div>

              <div className='total'>
                { 
              data.map((x)=>{
                  return(
                
                <div className='box'>
                  
                 <div className='img'>
                    {x.artists}
                  </div>
               
                  
                  <div className='name'>
                    {x.artists}
                  </div>
             


                  <div className='postion'>
                   {x.artists}
                  </div>
             
                </div>
               );
                })
                
}
              </div>
          </div>
         </div>

          

         <div className='main'>
          <div className='ayush'>
              <div className='header'>
                <div className='partist'>profile artists</div>
                <div className='btn' onClick={()=>setisShow(1)}> <Link to='/all' >Show all</Link></div>
              </div>

              <div className='total'>
                { 
              data.map((x)=>{
                  return(
                <div className='box'>
                  <div className='img'>
                    img{x.name}
                  </div>
                  <div className='name'>
                    name{x.name}
                  </div>
                  <div className='postion'>
                    Singer{x.name}
                  </div>
                </div>
                  );
                })
                
}
              </div>
          </div>
         </div>

    </div>
  )
}

export default Body
