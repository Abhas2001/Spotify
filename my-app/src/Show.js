import React from 'react'
import "./Show.css";
import { useState } from 'react';
import Body from './Body';
import Header from './Header';



const Show = ({user=[{}]}) => {
    const[ishover, setishover]=useState(0);
   
  
  return (
    <div className='total'>
      <Header/>
   

</div>
  )
 
}



export default Show