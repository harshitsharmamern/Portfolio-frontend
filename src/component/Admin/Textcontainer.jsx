import React, { useState } from 'react';
import TextField from '@mui/material/TextField'; // Make sure to import TextField as well
import Button from '@mui/material/Button';

const Textcontainer = () => {
    const [open, setOpen] = useState(false);
    const [data,setdata] = useState({});
    const handleClose = () => {
      setOpen(false);
    };
    const additem = () => {
      console.log(data);
    };
    const handelchange=(e)=>{
        setdata({
          ...data,
        [e.target.label] : e.target.value
        })
    }
  return (
    <>
 
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px',flexDirection:'column' }}>
              {/* <p style={{ marginRight: '10px' }}>Project Name:</p> */}
              <TextField
                id="standard-search"
                label="project title"
                type="search"
                variant="standard"
                onChange={handelchange}
              />
            

              <TextField
                id="another-field"
                label="project discription"
                type="search"
                variant="standard"
                onChange={handelchange}

              />
            

            <TextField
                id="standard-search"
                label="languge used"
                type="search"
                variant="standard"
                onChange={handelchange}

              />
               <TextField
                id="standard-search"
                label="project link"
                type="search"
                variant="standard"
                onChange={handelchange}

              />
               <TextField
                id="standard-search"
                label="github link"
                type="search"
                variant="standard"
                onChange={handelchange}

              />

          </div>
          


          <Button onClick={handleClose}>Close</Button>
          <Button onClick={additem}>Add</Button>
    </>
  )
}

export default Textcontainer