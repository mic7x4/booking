import './featuredProperties.css'
import {image1, image2, image3, image4, image5, image6, image7, image8,image9, image10} from '../../assets/images'
import useFetch from '../../hooks/useFetch.js';


function FeaturedProperties() {
  const {data,loading,error} = useFetch("hotels?featured=true&limit=4");
  console.log(data);
  return (
    <div className='faturedProperties'>

      {loading ? "Loading" : <>
        {data.map(item => (
          
      <div className="fpItem" key={item.id}>
      <img src={item.photos[0]} alt="" className="featuredProImg" />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
          {item.rating &&           
            <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
          </div>}
    </div>
        ))}
      </>}
    </div>
  )
}

export default FeaturedProperties