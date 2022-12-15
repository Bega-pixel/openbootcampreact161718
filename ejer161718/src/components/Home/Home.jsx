import './home.css';
import React from 'react';

const Home = () => {
  return (
    <div>
      <img className='imagen-home' src={require("../images/pexels-fahad-alani-1789492.jpg")} alt="imagen-Cabaña sobre montaña" />
      <h1>Sky view</h1>
    </div>
  )
}

export default Home