import './home.css'

function Home() {
  return (
    <div>
        <div className="container nav__container">
            <nav>
                <div className="nav__logo">
                    <h2>Netphantom</h2>
                </div>
                <ul className="nav__menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/hotels">Hotels</a></li>
                    {/* <li><a href="/">Home</a></li> */}
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Home