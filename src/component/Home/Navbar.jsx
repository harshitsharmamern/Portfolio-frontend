import React, { useEffect, useState } from 'react'
// Link
import logoimage from "../../photo/jsico.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const savedTheme = localStorage.getItem('selectedTheme');

    const [darkmode,setdarkmode] = useState(false)

    useEffect(() => {
      if(savedTheme==="light"){
        document.body.classList.remove('light-theme'); 
        document.body.classList.add('dark-theme'); 

      }else{
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme'); 
 
      }
    }, [darkmode]);
      ////////////////////////
      
    const darkmodebtn=()=>{
        if(darkmode==true){
            setdarkmode(false)
            localStorage.setItem("selectedTheme","light")
        }else{
            setdarkmode(true)
            localStorage.setItem("selectedTheme","dark")
        }
    }
    return (
    <>
     <nav>
        
                    <img className="logo" src={logoimage} alt="as" />
                    <ul>
                    <Link className='nav-tab-links' to="/">Home</Link>
                    <Link className='nav-tab-links'  to="/about">About</Link>
                    <Link className='nav-tab-links'  to="/contact">Contact</Link>
                    <Link className='nav-tab-links'  to="/web-developer">MY projects</Link>
                    {/* <Link className='nav-tab-links'  to="/admin">admin</Link> */}

                        {/* <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">services</a></li>
                        <li><a href="#">portfoilo</a></li> */}
                    </ul>
                    <div onClick={ darkmodebtn} className="darkmodebtn">
                        <button>dark</button>
                    </div>
                </nav>
    </>
  )
}

export default Navbar