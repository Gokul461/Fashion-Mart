import React from 'react'
import './page204.css'
import page4 from '../../assets/images/404.svg'
const page404 = () => {
  return (
    <div className='page404'>
      <div className='img-404'>
        <h1>404 Page Found</h1>
        <img src={page4} alt="404_page"></img>
      </div>
    </div>
  )
}

export default page404;
