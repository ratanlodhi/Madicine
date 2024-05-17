import React, { useState } from 'react';

function SearchComponent() {
  // const [isFocused, setIsFocused] = useState(false);

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };

  return (
    <div>
      <input
        id="search"
        type="text"
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        placeholder="Search..."
        // style={{
        //   border: isFocused ? '1px solid #1dbf73' : '1px solid rgba(0, 0, 0, 0.276)',
        // }}
      />
    </div>
  );
}

export default SearchComponent;
