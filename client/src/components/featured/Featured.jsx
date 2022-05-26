import './featured.css'
import {image1, image2, image3, image4, image5, image6, image7, image8,image9, image10} from '../../assets/images'


function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img className='featuredImg' src={image3} alt="" />
            <div className="featuredTitles">
                <h1>Rwanda</h1>
                <h2>1234 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src={image3} alt="" />
            <div className="featuredTitles">
                <h1>Rwanda</h1>
                <h2>1234 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src={image3} alt="" />
            <div className="featuredTitles">
                <h1>Rwanda</h1>
                <h2>1234 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured