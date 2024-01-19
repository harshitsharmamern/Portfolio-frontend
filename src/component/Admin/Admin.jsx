import React, { useState } from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import Button from '@mui/material/Button';

// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import TextField from '@mui/material/TextField'; // Make sure to import TextField as well
import './admin.css'
// import Textcontainer from './Textcontainer';




const Admin = () => {
    // const [open, setOpen] = useState(false);
    
    const [pdetails,setpdetails] = useState({
      pname:"",pimage:"",pprice:"",psize:"",pdis:""
})


  // const addfield = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const hangelchange=(e)=>{
       setpdetails({...pdetails,
        [e.target.name] : e.target.value
       })

  }
  const addproduct=async()=>{
    try {
      const apiUrl = process.env.REACT_APP_API_URL;

      const response = await fetch(`${apiUrl}/api/user/productadd`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pdetails),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Product added successfully:', data);
      } else {
        console.error('Failed to add product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }

  }
  return (
    <>
      {/* <div className="addbtn">
        <AddCircleOutlineIcon onClick={addfield}/>
      </div> */}

      {/* <Dialog open={open} onClose={handleClose}>
        <DialogContent>
        
        {/* <Textcontainent/> */}
        {/* <Textcontainer/> */}

        

        {/* </DialogContent>  */}
      {/* </Dialog> */}
      

      <div className='addproduct'>
     <h1>product add</h1>
     <ul>
      <li>
          name : <input   onChange={hangelchange}  name='pname' value={pdetails.pname}   type="text" /> </li>
      <li> image : <input onChange={hangelchange} name='pimage' value={pdetails.pimage} type="text" />   </li>
     <li>  price : <input onChange={hangelchange}  name='pprice' value={pdetails.pprice} type="text" /> </li>
    <li>   size : <input  onChange={hangelchange} name='psize' value={pdetails.psize} type="text" />   </li>
    <li>   discount : <input type="text" /> </li>
     </ul>

     <button onClick={addproduct}> add </button>
      </div>

  

    </>
  );
}

export default Admin;
