import logo from './logo.svg';
import './App.css';
import First from './component/First';
import Navbar from './component/Home/Navbar';
import About from './component/About/About';
import Frontend from './component/Html/Frontend';
import Admin from './component/Admin/Admin';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './component/contact/Contact';
import Webdeveloper from './component/contact/Webdeveloper';

function App() {
  return (
    <>

      
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<First/>}/>
        <Route exact path="/About" element={<About/>}/>
        {/* <Route exact path="/html" element={<Frontend/>}/> */}
        <Route exact path="/admin" element={<Admin/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/web-developer" element={<Webdeveloper/>}/>

      </Routes>
    </Router>
      {/* <First/> */}
    </>
  );
}

export default App;
