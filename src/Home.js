import React from "react";
import "./Home.css";


function Home() {
  return (
    <div className="home">
       <div className='home_content'>
        
      <h3>Hello,it's</h3>
      <h1>Hrithik || Arya</h1>
      <h3>And We are The <span>Event 360 Developer</span></h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit vitae quisquam esse? Eveniet esse repellat earum? Dolorum ullam quae debitis provident accusamus? Ducimus, sequi! Nostrum necessitatibus eius perspiciatis, iure suscipit tempore cupiditate.</p>
      <div className="social_media">
        
        <a href="https://m.facebook.com/lifechanger.rityada"><i className='bx bxl-facebook'></i></a>
        <a href="https://www.instagram.com/ll___sarkar___ll/"><i className='bx bxl-instagram'></i></a>
        {/* <a href="#"><i className='bx bxl-linkedin-square'></i></a> */}
      </div>
      <div className="home_img">
        <img src="F:\on project work\About us\images.2.jpeg" alt="" />
      </div>

    </div>
    </div>
  );
}

export default Home;
