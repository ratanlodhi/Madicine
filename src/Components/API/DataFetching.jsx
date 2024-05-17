// import React, { useState, useEffect } from 'react';

// function DataFetching() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://backend.cappsule.co.in/api/v1/new_search?q=paracetamol&pharmacyIds=1,2,3');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <>
//     <div>
//      {
//   data.map(item =>{
//     return(
//       <div>{item.
//         saltSuggestions},{item.medicineSuggestions}</div>

       
//     )
//   })
// }
//     </div>
//     </>
//   );
// }

// export default DataFetching;
