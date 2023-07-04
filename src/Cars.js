import React from 'react'
import './Cars.css'
import Product from './Product'


function Cars() {
  return (
  <div className="car">
    <div className='car_content'>
      <img 
      className='car_image'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhYomFNrPQ_Nev29lmG1Purv8ld5lKH_P_IXtCIXDdBetHqpYiDtgYRqWags1kjkllBE&usqp=CAU" alt="" />
      <div className='front_car1'>
        <h1> <span> Give regular ghodi's a break</span> </h1>
        <p>HIRE CLASSIC</p>

        <h6>12+ YEARS OF EXPERIENCE & TRUST</h6>
        <h5><span> WE HAVE INDIA'S LARGEST COLLECTION </span></h5>
      </div>
      <div className='front_car2'>
        <h5><span1>Explore Our 3 Remake</span1>  </h5>
        <h5><span1>Versions starting At</span1>  </h5>
        <h5><span1>35000 in India</span1> </h5>
      </div>
      <div className='front_car3'>
        <Product
        id='8'
        title='| 01 | The Carnforth Red'
        price={3456}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCtkjTYeRBoBDnzVC5zBcFUNVKtOwOQ7-PIY5KXntMAOnoMzjfbYBMWUBYe_jL7rmKkI&usqp=CAU"
        />
        
      </div>
      <div className='front_car3'>
        <Product
        id='10'
        price={6576}
        title= '| 02 | The Athlantis White '
       image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUyb0dmlOwNb8qUpzF9RqB8Ao7-PBvst4wg&usqp=CAU" 
        />
        
      </div>
      <div className='front_car3'>
        <Product
        id='11'
        price={97785}
         title='| 03 | The Flexen Gold '
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaa7Y1B0pcylwg6pNwDp01mSJjlCl2LlWu0_raT3Wz-vuiWV631m1Ti1x6ZxrMYd6mWyI&usqp=CAU" 
        />
       
      </div>
      <div className="front_car1">
        <h3><span>explore'</span></h3>
        <h6>OUR AUTHENTIC CONVERTIBLE'S</h6>
      </div>

      <div className='front_car2'>
        <h5><span1>Explore Our 27</span1>  </h5>
        <h5><span1>AUTHENTIC'S STARTING AT</span1>  </h5>
        <h5><span1>35000 IN INDIA</span1> </h5>
        <img 
        className='sarkar_img'
        src='C:\Users\HRITHIK KUMAR\OneDrive\Desktop\Event360\event360\src\components\sarkar.jpg' alt="#" />
      </div>
    </div>
  </div>
    
  )
}

export default Cars