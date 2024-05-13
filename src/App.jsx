import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Video Player/VideoPlayer'

const App = () => {

  const [playsState, setPlaysState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='OUR PROGRAMS' title='What We Offer' />
        <Programs />
        <About setPlaysState={setPlaysState}/>
        <Title subTitle='GALLERY' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials />
        <Title subTitle='CONTACT US' title='Get In Touch' />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playsState={playsState} setPlaysState={setPlaysState}/>
    </div>
  )
}

export default App