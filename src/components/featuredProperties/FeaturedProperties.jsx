import './featuredProperties.css'
import {image1, image2, image3, image4, image5, image6, image7, image8,image9, image10} from '../../assets/images'


function FeaturedProperties() {
  return (
    <div className='faturedProperties'>
      <div className="fpItem">
        <img src={image4} alt="" className="featuredProImg" />
            <span className="fpName">Apart hotel Stare Miasto</span>
            <span className="fpCity">Millan</span>
            <span className="fpPrice">Starting from $250</span>

            <div className="fpRating">
                <button>9</button>
                <span>Excellent</span>
            </div>
      </div>
      <div className="fpItem">
        <img src={image4} alt="" className="featuredProImg" />
            <span className="fpName">Apart hotel Stare Miasto</span>
            <span className="fpCity">Millan</span>
            <span className="fpPrice">Starting from $250</span>

            <div className="fpRating">
                <button>9</button>
                <span>Excellent</span>
            </div>
      </div>
      <div className="fpItem">
        <img src={image4} alt="" className="featuredProImg" />
            <span className="fpName">Apart hotel Stare Miasto</span>
            <span className="fpCity">Millan</span>
            <span className="fpPrice">Starting from $250</span>

            <div className="fpRating">
                <button>9</button>
                <span>Excellent</span>
            </div>
      </div>
    </div>
  )
}

export default FeaturedProperties