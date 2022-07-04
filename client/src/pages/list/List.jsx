import "./list.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchitem/SearchItem"
import useFetch from "../../hooks/useFetch.js"
import reFetch from "../../hooks/useFetch.js"

function List() {

  const location = useLocation()

  const [destination,setDestination] = useState(location.state.destination)
  const [dates,setDates] = useState(location.state.dates)
  const [openDate,setOpenDate] = useState(false)
  const [options,setOptions] = useState(location.state.options)
  const [min,setMin] = useState(undefined)
  const [max,setMax] = useState(undefined)

  const {data, loading, error , reFetch} = useFetch(`hotels?city=${destination}&min=${min||0}&max=${max|| 999}`)

 
  const handleClick = () =>{
    reFetch();
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="destination">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="destination">Check in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate,"MM/dd/yyyy")}`} to {`${format(dates[0].endDate,"MM/dd/yyyy")}`}</span>

              {openDate && 
                <DateRange
                onChange={item => setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
            />
              }
              
            </div>
            <div className="lsItem">
              <label htmlFor="options">Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price <small>per night</small> </span>
                <input min="0" type="number" onChange={e=> setMin(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max Price <small>per night</small> </span>
                <input min="0" onChange={e=> setMax(e.target.value)} className="lsOptionInput"  type="number" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adults</span>
                <input min={1} type="number" placeholder={options.adult} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input min={0} type="number" placeholder={options.children} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input min={1} type="number" placeholder={options.room} className="lsOptionInput" />
              </div>
            </div>
            <button onClick={handleClick} >Search</button>
          </div>
          <div className="listResult">
            {loading ? "Loading" : <>
            {data.map(item => (
                <SearchItem item={item} key={item._id}/>
            ))}
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List