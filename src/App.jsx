import './index.css';
import Navbar from './components/UI/navbar'
import Cards from './components/section/cards'
import Hero from './components/section/hero'
import Hoverbar from './components/UI/hoverbar';
import Project from './components/section/project';
import FloatingCards from './components/layouts/floating_cards';
import Hero3DScene from './components/UI/floatingObjects'
import LoadingScreen from './components/UI/LoadingScreen'
import Footer from './components/UI/Footer'

function App() {
  return (
  <>
    <LoadingScreen />
    {/* Background Glowing Orbs */}
    <div className="orb-container">
      <div className="glowing-orb orb-1"></div>
      <div className="glowing-orb orb-2"></div>
      <div className="glowing-orb orb-3"></div>
    </div>

    <Navbar />
    <Hero/>
    {/* <Hero3DScene/> */}
    {/* <Hoverbar/> */}
    {/* <Cards/> */}
    <Cards/>
     <Project/>
     <Footer/>
   
  </>
  );
}

export default App;