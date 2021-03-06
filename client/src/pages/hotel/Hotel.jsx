import  './hotel.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowCircleLeft, faArrowCircleRight, faArrowLeft, faArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {image1, image2, image3, image4, image5, image6, image7, image8,image9, image10} from '../../assets/images'
import { useContext, useState } from 'react'
import useFetch from '../../hooks/useFetch.js'
import { useLocation } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'


function Hotel() {
  const location = useLocation()
  const id = location.pathname.split("/")[2]

  const {data, loading , error} = useFetch(`/hotels/find/${id}`)


  const photos = [
    image1, image2, image3, image5, image7
, image6  ]


const {dates} = useContext(SearchContext);

console.log(dates);

const [slideNumber,setSlideNumber] = useState(0)
const [openModal,setOpenModal]= useState(false)



const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)

} 

const handleMove = (direction)=>{
  let newSlideNumber;

  if(direction === 'l'){
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1
  }else {
    newSlideNumber = slideNumber ===  5 ? 0 : slideNumber +1

  }
  setSlideNumber(newSlideNumber)
}



  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      {openModal &&
        <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpenModal(false)} />
          <div className="sliderWapper">
              <FontAwesomeIcon icon={faArrowCircleLeft} className='arrow'  onClick={()=>handleMove('l')}/>
                <img src={data.photos[slideNumber]} className="sliderImg" alt="" />
              <FontAwesomeIcon icon={faArrowCircleRight} className='arrow' onClick={()=>handleMove('r')}/>
          </div>

        </div> }
      {
        loading ? "loading" : (
          <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">Excellent location - {data.distance}m from Town</span>
          <span className="hotelPriceHighlight">Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi</span>

          <div className="hotelImages">
            {data.photos?.map((photo, index)=>(
              <div className="hotelImgWrapper">
                <img key={index} onClick={()=> handleOpenModal(index)} src={photo} className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelsDetailsPrice">
                <h1>Perfect for a 9-night Stay!</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <h2>
                  <b>$500</b> (9 nights)
                </h2>
                <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
      </div>
        )
        
      }
      <MailList/>
      <div className="hotelContainer">
      <Footer/>
      </div>
    </div>
  )
}

export default Hotel