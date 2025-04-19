import React from 'react'
import './displayfelx.css'
import dis1 from '../../assets/images/bodyimg1.png'
import dis2 from '../../assets/images/bodyimg2.png'
import dis3 from '../../assets/images/bodyimg3.png'
import dis4 from '../../assets/images/bodyimg4.png'
const displayflexbox = () => {
  return (
    <div className='dis_cont'>
        <div className='img-cont'>
            <img className='imges'alt ="" src={dis1}></img>
            <img className='imges'alt ="" src={dis2}></img>
            </div>
            <div className='text-cont'>
                <h1><strong>Up</strong> your Comfort Game</h1>
            </div>
             <div className='img-cont'>
            <img className='imges'alt ="" src={dis3}></img>
            <img className='imges'alt ="" src={dis4}></img>
        </div>
      
    </div>
  )
}

export default displayflexbox
