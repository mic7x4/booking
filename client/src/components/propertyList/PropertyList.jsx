import './propertyList.css'
import {image1, image2, image3, image4, image5, image6, image7, image8,image9, image10} from '../../assets/images'
import useFetch from '../../hooks/useFetch.js';

function PropertyList() {
    const {data,loading,error} = useFetch("hotels/countByType");
    const images = [image1,image2,image3,image4,image5]
  return (
    <div className='pList'>
        {loading ? ("loading"): <>
            
            {data && images.map((img, index)=>( 
            <div className="pListItem" key={index}  >
                <img className='pListImg'  src={img} alt="" />
                <div className="pListTitles">
                    <h1>{data[index]?.type}</h1>
                    <h2>{data[index]?.count} {data[index]?.type}</h2>
                </div>
            </div>
            
            ))}
        </>}
    </div>
  )
}

export default PropertyList