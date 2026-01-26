import Data from './Data'
import './Home.css'
import ScrollDown from './ScrollDown'
import Social from './Social'

function Home() {
  return (
    <section className="home section" id="home">
        <div className="home-container grid">
            <div className="home-content grid">
                <Social />
                <div className="home-image"></div>
                <Data /> 
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}
 
export default Home
