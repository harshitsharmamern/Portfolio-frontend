import React, { useState, useEffect } from 'react';
import '../css/contact.css'
const Contact = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/user/allproduct");
                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                } else {
                    console.error("Failed to fetch data:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();


        
    }, []);
    console.log(data);
    return (
        <>
        
        <h1>project will be soon deployed 
        </h1>
        </>
      );
      
};

export default Contact;
