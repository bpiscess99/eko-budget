import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import home from '../../images/home.jpeg'

const Home = () => {
  return (
    <div className='home'>
  <nav className='container'>
    <div className='logo'>
     <span>Eko Budget</span>
    </div>

    <ul className='home-links'>
      <li>
        <Link to="/register">Register</Link>
      </li>

      <li>
        <button className='--btn --btn-primary'>
          <Link to="/login">Login</Link>
        </button>
      </li>
    </ul>
  </nav>

  {/* Hero Section */}
  <section className='home-main'>
      <div className='home-left'>
           <h1>Eko Budget For Your Business Solution</h1>
      </div>
      
      <div className='home-right'>
        <img src={home} alt='home'/>
      </div>

    </section>
    </div>
  )
}

export default Home