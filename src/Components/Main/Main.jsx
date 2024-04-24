import React,{useEffect} from 'react';
import './main.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegClipboard } from "react-icons/fa";
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  const Data = [
    {
      id: 1,
      imgSrc: img1,
      dest: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      desc: 'Lorem Ipsum is sid the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 2,
      imgSrc: img2,
      dest: 'Angkor Wat',
      location: 'Italy',
      grade: 'CULTURAL RELAX',
      fees: '$800',
      desc: 'Lorem Ipsum is sid the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 3,
      imgSrc: img3,
      dest: 'Cinque Terre',
      location: 'Italy',
      grade: 'CULTURAL RELAX',
      fees: '$600',
      desc: 'Lorem Ipsum is sid the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 4,
      imgSrc: img4,
      dest: 'Taj Mahal',
      location: 'India',
      grade: 'CULTURAL RELAX',
      fees: '$200',
      desc: 'Lorem Ipsum is sid the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 5,
      imgSrc: img5,
      dest: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$300',
      desc: 'Lorem Ipsum is sid the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 6,
      imgSrc: img6,
      dest: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$600',
      desc: 'Lorem Ipsum is sid the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 7,
      imgSrc: img7,
      dest: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$400',
      desc: 'Lorem Ipsum is sid the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },
    {
      id: 8,
      imgSrc: img8,
      dest: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      desc: 'Lorem Ipsum is sid the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },{
      id: 9,
      imgSrc: img9,
      dest: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$900',
      desc: 'Lorem Ipsum is sid the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    },

    
  ];

  return (
    <section className="main container section">
      <div className="main-title">
        <h3 data-aos="fade-right" >
          Most Visited Destinations
        </h3>
      </div>
      <div className="destinations grid">
        {
          Data.map(({ id, imgSrc, dest, location, grade, fees, desc }) => {
            return (
              <div key={id} className="card" data-aos="fade-up">

                <div className="card-img">
                  <img src={imgSrc} alt={dest} />
                </div>

                <div className="card-info">
                  <h3 className="card-title">{dest}</h3>
                  <span className="sub-title flex"><HiOutlineLocationMarker className='icon' />
                    <span className="location">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{desc}</p>
                  </div>
                  <button className='btn flex'>DETAILS
                    <FaRegClipboard className='icon' />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Main;
