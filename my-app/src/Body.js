import React from 'react'

import './Header.css'
import { useState } from 'react';
import './Body.css'
import Show from './Show';
import Album from './Album';

const Body = () => {
    const data =[{image:"https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",name:"Pritam",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3",name:"Arijit Singh",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebb19af0ea736c6228d6eb539c",name:"A.R. Rahman",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5eba038d7d87f8577bbb9686bd3",name:"Sachin-Jigar",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebfc7c542c04b5f7dc8f1b1c16",name:"Anirudh Ravichander",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84",name:"Atif Aslam",artist:"Artist"}
    
   
    ]
   
    const[isclick,setisclick]=useState(0);
    const[ishover, setishover]=useState(0);
    const[isShow,setisShow]=useState(0);
  return (
    <div>
        <div className="abhas">
      <div className='artist'>
        <div className='tablehead'>
        <p>Popular artists</p>
       
        <button onClick={()=>setisShow(1)}>{isShow==0||1? "Show all":""}</button>

        </div>
      <div className='total'>
       {data.map((x,index)=>{return(
     
       <div title={index} className='box' onMouseEnter={()=>{setishover(true)}} onMouseLeave={()=>{setishover(false)}}>
        <div className='photo'><img className='artpic' src={x.image}/> </div>
        <div className='artistname'>{x.name}</div>
        <div className='job'>{x.artist}</div>
       </div>
        
       )})
}

</div>

{isShow==1?

<Show user={data} />:
<Album  album={data}/>
}

      </div> 
      </div> 
      
    </div>
  )
}

export default Body
