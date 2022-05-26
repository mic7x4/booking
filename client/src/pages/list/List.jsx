import "./list.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchitem/SearchItem"

function List() {

  const location = useLocation()

  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [openDate,setOpenDate] = useState(false)
  const [options,setOptions] = useState(location.state.options)

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
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")}`} to {`${format(date[0].endDate,"MM/dd/yyyy")}`}</span>

              {openDate && 
                <DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
            />
              }
              
            </div>
            <div className="lsItem">
              <label htmlFor="options">Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min Price <small>per night</small> </span>
                <input min="0" type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max Price <small>per night</small> </span>
                <input min="0" type="number" className="lsOptionInput" />
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
            <button>Search</button>
          </div>
          <div className="listResult">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List