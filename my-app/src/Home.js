import React, { useState } from 'react'
import "./Home.css";
import logo from '../src/images/images.png';
import home from '../src/images/download.png';
import search from '../src/images/search.jpeg';
import clickedhm from '../src/images/click.jpeg';
import arijit from '../src/images/arijit.jpeg';
import play from '../src/images/plays.png'



export const Home = () => {

    const[isclick,setisclick]=useState(0);
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
            <p>Home</p>
         </div>
         <div className='logo'>
         <img className='spologo' src={search}/>
            <p>Search</p>
         </div>
      </div>
       <div className='abhas'>
      <div className='secbox' >
        <div className='chevron'>
          1
         </div>
         <div className='btns'>
            <button className='sign'>SignUp</button>
            <button className='log'
      >Log in</button>
         </div>
      </div>
      <div className='artist'><h>Popular Artist</h>
      
       <div className='total'>
       <div className='box' >
        <div className='photo'><img className='artpic' src={arijit}/> <img className='play' src={play}/></div>
        <div className='artistname'>Arijit Singh</div>
        <div className='job'>Artist</div>
       </div>
       </div>
      </div>
      </div>

    </div>

    
  )

}


