import React from 'react'
function SearchBar() {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  

  return (
    <div className="search-wrapper">
      <h2>Salt Suggestions</h2>
      <i className='material-icons fs-20'>search</i>
      <input
        type="text" id="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Type your medicine name here"
      />
      <button type='submit' id="search-button">Search</button>
      <ul className='container'>
        {saltSuggestions.map((saltSuggestion) => (
          <li className='card' key={saltSuggestion.id}>
            <div style={{display : 'flex', justifyContent:"space-between", alignContent:"center" }}>
              <div>
              <ul>
              <li className='a'> <span className='button-80'>Form:</span> <span className='button-80'
               value={saltSuggestion.most_common.Form} onClick={(e)=>{
                setShowitem(e.target.value);
               }}>{saltSuggestion.most_common.Form } </span> <div>{setShowitem}</div>  </li>
              <li  className='a'><span className='button-80'>Strength:</span> <span className='button-80' value={saltSuggestion.most_common.Strength}>{saltSuggestion.most_common.Strength}</span></li>
              <li  className='a'><span className='button-80'>Packing:</span> <span className='button-80' value={saltSuggestion.most_common.Packing} >{saltSuggestion.most_common.Packing}</span></li>
             
            </ul>
              </div>
            
              <div>
                solt A
              </div>
              <div> From 80</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar





