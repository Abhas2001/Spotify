import React, { useState } from 'react'

const Section = (props) =>{

   
   

    const handleButtonClick = () => {
        props.onOptionChange();
    }
     
  
   
     const arr= [{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"}]
return (
  <div >

    <div className='contentbody'>
       <div className='popular'>
      <div className='artists'>
        Popular artists
      </div>

      <div>
        <button onClick={handleButtonClick}>Show all</button>
      </div>
      </div>
      <div className='box'>
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
    



   
    <div className='contentbody'>
         <div className='popular'>
        <div className='artists'>
          Popular artists
        </div>
        <div>
        <button onClick={handleButtonClick}>Show all</button>
      </div>
        <div>
         
        </div>
        </div>
        <div className='box'>
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
)
}

export default Section
