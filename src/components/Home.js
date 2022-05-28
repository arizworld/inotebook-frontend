import { Link } from 'react-router-dom'
import notes from '../resources/notes.jpg'
function Home() {
  return (
    <>
      <div className="container">
        <div className="description">
          <h1>Your online notebook</h1>
          <p>To keep track of your notes!! keep your notes safe,secure and access from anywhere.</p>
          <Link to="/">Get Started</Link>
        </div>
        <div className="illustration">
          <img className="image" src={notes} alt="notes illustration" />
        </div>
      </div>
      <div className="whyus-header">
        <h1>why us?</h1>
      </div>
      <div className="whyus">

        <div className="cards">
          <div className="card-header">
            <div className="icon">
              <i className="fa-solid fa-cloud-arrow-up"></i>
            </div>
            <h4>On Cloud</h4>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="cards">
          <div className="card-header">
            <div className="icon">
              <i className="fa-solid fa-user-secret"></i>
            </div>
            <h4>More Secure</h4>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="cards">
          <div className="card-header">
            <div className="icon">
              <i className="fa-solid fa-note-sticky"></i>
            </div>
            <h4>Easy Edit</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="cards">
          <div className="card-header">
            <div className="icon">
              <i className="fa-solid fa-wand-magic-sparkles"></i>

            </div>
            <h4>Easy Life</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  )
}

export default Home
