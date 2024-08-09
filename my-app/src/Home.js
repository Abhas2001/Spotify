import React, { useState } from 'react'
import "./Home.css";
import logo from '../src/images/images.png';
import home from '../src/images/home.png';
import search from '../src/images/search.png';
import clickedhm from '../src/images/clickedhm.png';
import play from '../src/images/plays.png'
import left from '../src/images/left.png';
import right from '../src/images/right.png';
import Show from './Show';
import Album from './Album'
import backlt from '../src/images/backclicked.png'




export const Home = () => {
    const data =[{image:"https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca",name:"Pritam",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab676161000051740261696c5df3be99da6ed3f3",name:"Arijit Singh",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebb19af0ea736c6228d6eb539c",name:"A.R. Rahman",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5eba038d7d87f8577bbb9686bd3",name:"Sachin-Jigar",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebfc7c542c04b5f7dc8f1b1c16",name:"Anirudh Ravichander",artist:"Artist"},
    {image:"https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84",name:"Atif Aslam",artist:"Artist"},
    ]
   
    const[isclick,setisclick]=useState(0);
    const[ishover, setishover]=useState(0);
    const[isShow,setisShow]=useState(0);
    
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
            <div><img onClick={()=>{setisShow(0)}} className='chev' src={isShow==1?backlt:left}/></div>
            <div><img className='chev' src={right}/></div>
         </div>
         <div className='btns'>
            <button className='sign'>SignUp</button>
            <button className='log'
      >Log in</button>
         </div>
      </div>
      <div className='artist'>
        <div className='tablehead'>
        <p>Popular artists</p>
       
        <button onClick={()=>setisShow(1)}>{isShow==0? "Show all":""}</button>

        </div>
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

{isShow==1?

<Show user={data} />:
<Album  album={data}/>
}

      </div>
      </div>
    </div>
    
  )

}


