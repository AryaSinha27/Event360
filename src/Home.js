import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://s.yimg.com/uu/api/res/1.2/pJlNARveuwk_lAXsCm8Oyg--~B/Zmk9ZmlsbDtoPTQ5Mzt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-07/8af8ada0-06d4-11ed-bf3f-705f665edcf3.cf.jpg"
          alt=""
        />

        <div className="home_row">
          <Product //1
            id="969"
            title="ASUS Laptop 8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/"
            price={40990}
            image="https://m.media-amazon.com/images/I/71c0GSxtEEL._SL1500_.jpg"
            rating={5}
          />

          <Product //2
            id="428"
            title="Nirlon Non-Stick Heavy Gauge Aluminium Kitchen Items - 10 Pieces Red "
            price={3999.9}
            image="https://i0.wp.com/s3.ap-south-1.amazonaws.com/img.paisawapas/images/2023/03/20161013/Best-Kitchen-Gadgets-On-Amazon-India.png?fit=1200%2C600&ssl=1"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product //3
            id="757"
            title="iQOO Neo 6 5G (8GB RAM, 128GB Storage) "
            price={34414}
            image="https://m.media-amazon.com/images/I/51DLLa8HNWL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={3}
          />

          <Product //4
            id="123"
            title="boAt Immortal Wireless Gaming in Ear Earbuds"
            price={8767}
            image="https://m.media-amazon.com/images/I/61q-2yzbBtL._SY355_.jpg"
            rating={4}
          />

          <Product
            id="456" //5
            title="Logass Men's Silk Blend Kurta Pyjama Set"
            price={1575}
            image="https://m.media-amazon.com/images/I/51FE21IGnyS._UY445_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product //6
            id="789"
            title="DEVKI INTERIORS Rich King Size Bed - A Solid Wooden Bed with Storage -
             Double Bed Furniture for Bedroom 
            Perfect Diwan Bed King Size Cot with Storage in Natural Finish"
            price={17867}
            image="https://m.media-amazon.com/images/I/41HZKQ5yKIL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
