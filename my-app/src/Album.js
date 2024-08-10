import React from 'react';
import './Album.css'
import { useState } from 'react';
import play from '../src/images/plays.png'

const Album = ({album=[{}]}) => {
    const[ishover, setishover]=useState(0);
    const[isShow,setisShow]=useState(0);
  return (
    <div className='artist'>
        <div className='tablehead'>
        <p>Popular albums</p>
       
        <button onClick={()=>setisShow(1)}>{isShow==0? "Show all":""}</button>

        </div>
      <div className='total'>
       {album.map((item)=>{return(
       
       <div className='box' onMouseEnter={()=>{setishover(true)}} onMouseLeave={()=>{setishover(false)}}>
        <div className='photo'><img className='artpic' src={item.image}/> </div>
        <div className='artistname'>{item.name}</div>
        <div className='job'>{item.artist}</div>
       </div>
      
       )})
}

</div>
    </div>
  )
}

export default Album
