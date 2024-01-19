import React, { useState } from 'react'
import './about.css'

const About = () => {
  
  const [todochange,settodochange] = useState('');
  const [todo,settodo] = useState([]);

  const handlechange=(e)=>{
        settodochange(e.target.value);
  }
  const handlesubmit=(e)=>{
    
     settodo([
      ...todo,todochange
     ])
     settodochange('')
  }

  

  return (
    <>
        <div className="contaner"> <h1>about content will soon developed</h1></div>

    </>
  )
}

export default About
    //  /*  <div className="header">
    //     <div className="container">

    //         <div className="box center-content">
    //              <div className="text-heading">
    //                <h1>
    //                Todo application
    //                 </h1> 
    //              </div>
    //              {/* //////////seerch box div */}
                 
    //              <div className="type-content">
    //                   <input className='type-box' type="text"  
    //                     value={todochange}
    //                     onChange={handlechange}
    //                   />
    //                   <button onClick={handlesubmit}>
    //                     Add
    //                   </button>
                    
    //                   {/* //text box */}
    //                   <div className="listbox">
    //                     <ul>
    //                     {todo.map((item,index)=>{
    //                       return(<>
    //                       <div className="text-item">

    //                         <div className="text-container">
    //                         <li key={index}> {item} </li>
    //                           </div>
                          

    //                         <div className="button-container">
    //                         <button className='item-edit'>edit</button>
    //                         <button>delete</button>
    //                         </div>
    //                       </div>
    //                       </>
    //                       )
    //                     })}
    //                     </ul>
                      
    //                   </div>
    //               </div>

    //         </div>
    //     </div>
    //   </div>

    //   */