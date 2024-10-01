// import React, { useState } from 'react'
// import './Hero.css'
// import { HiLocationMarker } from 'react-icons/hi'
// import CountUp from 'react-countup';
// import axios from 'axios'
// //import React, { useState } from 'react';


// const Hero = () => {

//   const [searchQuery, setSearchQuery] = useState('GET');
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`https://api.gdeltproject.org/api/v2/doc/doc?query=construction&mode=artlist
//       `);
//       setResults(response.data.articles); // Assuming the API returns an array of articles
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   return (
//     <section className='hero-wrapper'>
//       <div className='paddings innerwidth flexCenter hero-container'>

//         {/* left section */}
//         <div className=" flexColStart hero-left">
//           <div className="hero-title">

//             <h1>Creating Strong & Lasting <br />
//               Trust in Every Build.</h1>

//           </div>
//           <div className=" flexColStart hero-des">
//             <span className='secondaryText'> Your success is the key to our story.</span>
//             <span className='secondaryText'>We embrace customer-centricity, innovation, and quality to build the world of tomorrow today.</span>
//           </div>
//           <div className=" flexCenter search-bar">
//             <HiLocationMarker color="var(--black)" size={25} />
//             <input type="text" />
//             <button className='button'>Search</button>

//           </div>
//           <div className="flexCenter stats">
//             <div className='flexColCenter stat'>
//               <span>
//                 <CountUp start={7700} end={8000} duration={4} />
//                 <span>+</span>
//               </span>
//               <span className='secondaryText'>Premium Services</span>

//             </div>
//             <div className='flexColCenter stat'>
//               <span>
//                 <CountUp start={1875} end={2000} duration={4} />
//                 <span>+</span>
//               </span>
//               <span className='secondaryText'>Happy Customers</span>

//             </div>
//             <div className='flexColCenter stat'>
//               <span>
//                 <CountUp end={16} />
//                 <span>+</span>
//               </span>
//               <span className='secondaryText'>Award Winnings</span>

//             </div>
            
//           </div>
//         </div>
//         <div className="flexCenter hero-right">
//           <div className="image-container">
//             <img src="hero-image1.jpg" alt="" />
//           </div>
//         </div>


//       </div>

//     </section>
//   )
// }

// export default Hero

import React, { useState } from 'react';
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import axios from 'axios';
import {motion} from 'framer-motion';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); 

  const handleSearch = async () => {
    setHasSearched(true);
    setResults([]);
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=construction&apiKey=b02dcd4e0d09457eb9cb11c4345389bd`);
      const filteredResults = response.data.articles.filter(article =>
        // article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        // article.description.toLowerCase().includes(searchQuery.toLowerCase())
        {
          const title = article.title ? article.title.toLowerCase() : '';
          const description = article.description ? article.description.toLowerCase() : '';
          
          return title.includes(searchQuery.toLowerCase()) || description.includes(searchQuery.toLowerCase());
        }
      );
      setResults(filteredResults);
   
    } catch (error) {
      console.error('Error fetching data:', error);
      setResults([]);
    }
  };

  return (
    <section className='hero-wrapper'>
      <div className='paddings innerwidth flexCenter hero-container'>

        {/* left section */}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
            initial={{y: "2rem", opacity:0}}
            animate={{y:0, opacity: 1}}
            transition={{
              duration: 2,
              type: "easy"
            }}
            >
              Creating Strong & Lasting <br />
               Trust in Every Build.
               </motion.h1>
          </div>
          <div className=" flexColStart hero-des">
            <span className='secondaryText'> Your success is the key to our story.</span>
            <span className='secondaryText'>We embrace customer-centricity, innovation, and quality to build the world of tomorrow today.</span>
          </div>
          <div className=" flexCenter search-bar">
            <HiLocationMarker color="var(--black)" size={25} />
            <input 
              type="text" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder="Search construction news..."
            />
            <button className='button' onClick={handleSearch}>Search</button>
          </div>

          {/* Search results */}
          <div className="search-results">
  {results.length > 0 ? (
    results.map((result, index) => (
      <div key={index} className="result-item">
        <h3>{result.title}</h3>
        <p>{result.description}</p>
        <a href={result.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    ))
  ) : (
    <div className="no-results">No results found</div>
  )}
</div>


          <div className="flexCenter stats">
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={7700} end={8000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium Services</span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={1875} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customers</span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp end={16} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Award Winnings</span>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="flexCenter hero-right">
          <motion.div
          initial={{x: "7rem", opacity:0}}
          animate={{x:0, opacity: 1}}
          transition={{
            duration: 2,
            type:"easy"
          }}
           className="image-container">
            <img src="hero-image1.jpg" alt="" />
          </motion.div>
        </div>

      </div>
    </section>
  );
 // console.log(response.data)
};

export default Hero;


