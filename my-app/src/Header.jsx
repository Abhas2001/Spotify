import React from 'react'
import './Header.css'
import { useState } from 'react';
import logo from '../src/images/images.png';
import home from '../src/images/home.png';
import search from '../src/images/search.png';
import clickedhm from '../src/images/clickedhm.png';
import backlt from '../src/images/backclicked.png';
import left from '../src/images/left.png';
import right from '../src/images/right.png';
import Body from './Body'
import { Link } from "react-router-dom"
import Search from './Search';
import Content from './Content';
import Section from './Section';
import Popularalbum from './Popularalbum';
import { data } from './data';

 




const Header = (value) => {

  const[option , setoption]=useState(false);
  const[albums , setalbums]=useState(false);
  const[serch, setserch] = useState(false);
  const [query, setquery] = useState("");
  const getfilterdata=(query,data)=>{

   if(!query){
       return data;
   }
   else

   return data.filter(song=>song.artists.includes(query));

}
 const querychange = (e) =>{
   setquery(e.target.value)
 }
  const handleOptionChange = () => {
   setoption(!option);
  };
  const handlealbums = () => {
   setalbums(!option);
  };

  console.log(albums);

   
    const[isclick,setisclick]=useState(0);
    const[ishover, setishover]=useState(0);
    const[isShow,setisShow]=useState(0);
  return (

    <div>
    <div className='header'>
       <div className='firstbox'>
         <div className='spotlogo'>
            <img className='spologo' src={logo}/>
            <p> <Link to='/albums'>Spotify</Link></p>
         </div>
         <div className='logo'onClick={()=> setisclick(isclick==0 ? 1:0)}>
            { isclick == 0 ?
         <img className='spologo' src= {home}/>:
         <img className='clickedlogo' src={clickedhm}/>
            }

            <p><Link to='/body' >Home</Link></p>
         </div>
         <div className='logo' onClick={()=>setserch(!serch)}>
         <img className='spologo' src={search}/>
            <p>Search</p>
         
         </div>
      
      </div>
      
      <div className='secbox'>
        <div className='chevron'>
            <div><img onClick={handleOptionChange} className='chev' src={isShow==1?backlt:left}/></div>
            <div><img className='chev' src={right}/></div>
            { serch==true ?
            <Search onQuerychange={querychange} onInputchange={getfilterdata}/>
            :
            null
}

         
         </div>
         <div className='btns'>
            <button className='sign'>SignUp</button>
            <button className='log'
      >Log in</button>
         </div>
         
      </div>
    
      

      </div>
      <div className='library' >
      <div className='secc'>
           <div className='ylib'> 
            YourLibrary
           </div>

</div>
 {option === false && albums === false ?
    <Section onOptionChange={handleOptionChange} onAlbumschange={handlealbums}/>
    : option === true ?
    <Content onOptionChange={handleOptionChange}/>
    : 
    <Popularalbum/>

 }
      </div>
     
        
      
  

    </div>
    
  )
}

export default Header
