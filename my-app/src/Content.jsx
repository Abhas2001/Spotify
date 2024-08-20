import React from 'react'
import './Content.css'

const Content = (props) => {


  
  return (
    <div >

      <div className='contentbody'>
         <div className='popular'>
        <div className='artists'>
          Popular artists
        </div>

        <div>
         
        </div>
        </div>
        <div className='box'>
          { props.data.map((k)=>{
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

export default Content
