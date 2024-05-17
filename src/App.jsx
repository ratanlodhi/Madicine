import './App.css'
import SearchBar from './Components/SearchBar'
import React, { useState, useEffect } from 'react';

const SaltSuggestions = () => {
  const [query, setQuery] = useState('paracetamol');
  const [saltSuggestions, setSaltSuggestions] = useState([]);
 const [showitem, setShowitem] = useState()
  useEffect(() => {
    const fetchSaltSuggestions = async () => {
      try {
        const response = await fetch('https://backend.cappsule.co.in/api/v1/new_search?q=${encodeURIComponent(query)}&pharmacyIds=1,2,3');
        const data = await response.json();
        setSaltSuggestions(data.data.saltSuggestions);
      } catch (error) {
        console.error('Error fetching salt suggestions:', error);
      }
    };

    fetchSaltSuggestions();
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
   
  };
return (
  <>


<p className='head'>Cappsule web development test</p>
  <SearchBar/>
{
  users.map(item =>{
    return(
      <li>{item.id}</li>
    )
  })
}

<p className='footer'>"Find medicines with amazing discount"</p>
<hr />
  </>
)
}

export default App

  
