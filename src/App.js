import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet
import Blog from './components/Blog'; // Import your Blog component

function App() {
  const location = useLocation();

  return (
    <div className='2xl:max-w-[1500px] 2xl:w-full 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center mx-auto'>
      <Routes>
      
       <Route path="/blog" element={
          <>
            <Helmet>
              <title>FOX Blog</title>
              <meta name="description" content="Explore FOX blog posts."/>
            </Helmet>
           
            <Blog />
           
          </>
        } />{/* */}

       
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
