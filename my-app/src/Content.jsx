import React from 'react'
import './Content.css'

const Content = () => {


  const arr= [{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"},{"img":"img"}]
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

export default Content
