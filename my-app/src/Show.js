import React from 'react'
import "./Show.css";
import { useState } from 'react';
import play from '../src/images/plays.png'


const Show = ({user=[{}]}) => {
    const[ishover, setishover]=useState(0);
   
  
  return (
    <div className='total'>
        {
            user.map((item)=>{
                return(
                    <div className='box' onMouseEnter={()=>{setishover(true)}} onMouseLeave={()=>{setishover(false)}}>
                    <div className='photo'><img className='artpic' src={item.image}/> <img className={ishover?'show':'hide'} src={play}/></div>
                    <div className='artistname'>{item.name}</div>
                    <div className='job'>{item.artist}</div>
                    </div>
                )
            })
        }


</div>
  )
 
}



export default Show