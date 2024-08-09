import React, { useState } from 'react'
import "./Home.css";
import logo from '../src/images/images.png';
import home from '../src/images/home.png';
import search from '../src/images/search.png';
import clickedhm from '../src/images/clickedhm.png';
import arijit from '../src/images/arijit.jpeg';
import play from '../src/images/plays.png'
import left from '../src/images/left.png';
import right from '../src/images/right.png';
import Show from './Show';




export const Home = () => {

    const data =[{image:"https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",name:"Arijit Singh",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3",name:"Arijit Singh",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebb19af0ea736c6228d6eb539c",name:"Arijit Singh",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5eba038d7d87f8577bbb9686bd3",name:"Arijit Singh",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebfc7c542c04b5f7dc8f1b1c16",name:"Arijit Singh",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84",name:"Arijit Singh",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebfc7c542c04b5f7dc8f1b1c16",name:"Arijit Singh",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84",name:"Arijit Singh",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebfc7c542c04b5f7dc8f1b1c16",name:"Arijit Singh",artist:"Artist"}
]

    const[isclick,setisclick]=useState(0);
    const[ishover, setishover]=useState(0);
  return (
    <div className='Container'>
      <div className='firstbox'>
         <div className='spotlogo'>
            <img className='spologo' src={logo}/>
            <p>Spotify</p>
         </div>
         <div className='logo'onClick={()=> setisclick(isclick==0 ? 1:0)}>
            { isclick == 0 ?
         <img className='spologo' src= {home}/>:
         <img className='clickedlogo' src={clickedhm}/>
            }
            <p >Home</p>
         </div>
         <div className='logo'>
         <img className='spologo' src={search}/>
            <p>Search</p>
         </div>
      </div>
       <div className='abhas'>
      <div className='secbox' >
        <div className='chevron'>
            <div><img className='chev' src={left}/></div>
            <div><img className='chev' src={right}/></div>
         </div>
         <div className='btns'>
            <button className='sign'>SignUp</button>
            <button className='log'
      >Log in</button>
         </div>
      </div>
      <div className='artist'><p>Popular artists</p>
      <div className='total'>
       {data.map((x)=>{return(
       
       <div className='box' onMouseEnter={()=>{setishover(true)}} onMouseLeave={()=>{setishover(false)}}>
        <div className='photo'><img className='artpic' src={x.image}/> <img className={ishover?'show':'hide'} src={play}/></div>
        <div className='artistname'>{x.name}</div>
        <div className='job'>{x.artist}</div>
       </div>
      
       )})
}

</div>


<Show user={data} />




      </div>
      </div>

    </div>

    
  )

}


