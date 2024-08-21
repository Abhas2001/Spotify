import React, { useState } from 'react';
import './Section.css';


const Section = (props) =>{

    console.log(props.option);
    const[val,setval]=useState(false);
   

    const handleButtonClick = () => {
        props.onOptionChange();
    }
     

    const handlealbums = () => {
        props.onAlbumschange();
    }
     
  
  
   
     const arr= [{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"}]
return (
  <div>

    <div className='maincontainer'>

    <div className='contentbody'>
       <div className='popular'>
      <div className='artists'>
        Popular artists
      </div>

      <div>
        <button onClick={handleButtonClick}>Show all</button>
      </div>
      </div>
      <div className='boxedd'>
        { arr.map((k)=>{
          return(
        <div className='Section'>
           {k.img}
        </div>
          )
        })

}
      </div>

      <div className='popular'>
      <div className='artists'>
        Popular artists
      </div>

      <div>
        <button onClick={handleButtonClick}>Show all</button>
      </div>
      </div>
      <div className='boxedd'>
        { arr.map((k)=>{
          return(
        <div className='Section'>
           {k.img}
        </div>
          )
        })

}
      </div>
      
    </div>


    



  
     
   
    </div>
  </div>
)
}

export default Section
