
import './App.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header/Header';
import Hero from './components/Hero section/Hero';
import About from './components/About/About';
import Service from './components/Service/Service';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();



function App() {

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <Review></Review>
      <Contact></Contact>
    </div>
  )
}

export default App
