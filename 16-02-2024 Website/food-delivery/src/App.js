import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from './components/navbar';
import Banner from './components/homebanner';
import Delivery from './components/delivery';
import AboutWork from './components/about';
import Menu from './components/menu';
import Testimonial from './components/testimonial';
import Newsletter from './components/newsletter';
import Footer from './components/footer';

function App() {
  return (
    <>
         <Navbar/>
         <Banner/>
         <Delivery/>
         <AboutWork/>
         <Menu/>
         <Testimonial/>
         <Newsletter/>
         <Footer/>
    </>
  
  );
}

export default App;
