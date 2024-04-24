import React ,{useEffect}from 'react'
import './home.css'
import video from '../../Assets/video1.mp4';
import { SlLocationPin } from "react-icons/sl";
import { FaFilter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandTripadvisor } from "react-icons/tb";
import { FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4 "></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className='homeTitle'>
            Search your Holiday
          </h1>
        </div>
        <div data-aos="fade-up" className="form grid">
          <div className="destination">
            <label htmlFor="city">Search your destination :</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here ....' />
              <SlLocationPin className='icon' style={{ color: 'black' }} />
            </div>
          </div>
          <div className="date">
            <label htmlFor="city">Select your date :</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="price">
            <div className='label_total flex'>
              <label htmlFor="price">Max price:</label>
              <h3 className='total'>$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />

            </div>
            <div className="searchFilter flex">
              <FaFilter className='icon' />
              <span>MORE filter</span>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="footerIcons flex">
          <div className="right">
          <FaFacebook className='icon' />
          <FaInstagram className='icon' />
          <TbBrandTripadvisor className='icon' />
          </div>
          <div className="left">
          <FaListUl className='icon'/>
          <TbApps className='icon' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home
