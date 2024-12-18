import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
// import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode
  return (
    <div className="App" style={{
      background: darkMode ? 'black' : '',
      color: darkMode ? 'white' : ''
    }}>
      <Navbar/>
        <Intro/>
        <Services/>
        <Experience/>
        <Work/>
        <Portfolio/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
    </div>
  ); 
}

export default App;
