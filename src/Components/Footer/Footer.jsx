import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './footer.css'
import video2 from '../../Assets/video2.mp4'

import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TbBrandTripadvisor } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_egfv2q9', 'template_pityf7n', form.current, {
        publicKey: 'WhCY_Zcxdp7oBPWzC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <section className="footer">
      <div className="video">
        <video src={video2} muted autoPlay loop type="video/mp4 "></video>
      </div>
      <div className="container fContent">
        <div className="content flex">
          <div className="text">
            <small>KEET IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <form ref={form} onSubmit={sendEmail}>
          <div className="input flex">
            <input type="email" placeholder='Enter Your Email' name='email' required />
            <button className='btn flex' type='submit' value="Send">
              SEND <FiSend className='icon' />
            </button>
          </div>
          </form>
        </div>

        <div className="footerCard flex ">
          <div className="intro flex ">
            <div data-aos="fade-up" className="logoDiv">
              <a href="#" className='logo flex '>
                Travel.<MdTravelExplore className='icon' />
              </a>
            </div>
            <div data-aos="fade-up" className="footer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ex esse dolores
            </div>
            <div data-aos="fade-up" className="social-links flex">
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <TbBrandTripadvisor className='icon' />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* Group one */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span >
                OUR AGENCY
              </span>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Services
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Insurance
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Agency
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Tourism
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Payment
              </li>
            </div>
            {/* Group two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span >
                PARTNERS
              </span>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Services
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Insurance
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Agency
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Tourism
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Payment
              </li>
            </div>
            {/* Group three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span >
                LAST MINUTE              </span>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Services
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Insurance
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Agency
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Tourism
              </li>
              <li className="list flex">
                <FaAngleRight className='icon' />
                Payment
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small >BEST TRAVEL WEBSITE THEME</small>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Footer
