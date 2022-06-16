import './featured.css'
import {image1, image2, image3, image4, image5, image6, image7, image8,image9, image10} from '../../assets/images'
import useFetch from '../../hooks/useFetch.js';


function Featured() {

    const {data,loading,error} = useFetch("/hotels/countByCity?cities=kigali,musanze,rubavu");
    console.log(data);

  return (
    <div className='featured'>
        { loading ? ("Loading please wait") : <>
        <div className="featuredItem">
            <img className='featuredImg' src={image3} alt="" />
            <div className="featuredTitles">
                <h1>Kigali</h1>
                <h2>{data[0]} Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src={image3} alt="" />
            <div className="featuredTitles">
                <h1>Musanze</h1>
                <h2>{data[1]} Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src={image3} alt="" />
            <div className="featuredTitles">
                <h1>Rubavu</h1>
                <h2>{data[2]} Properties</h2>
            </div>
        </div></>}
    </div>
  )
}

export default Featured