import './HomePage.css'
import { useState } from 'react';


const HomePage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  
  const handleNameChange = (e) => {
    setName(e.target.value)
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  };

  return (
    <>
     <main>
      <div className='main-section'>
        <div className="hero">
                <h1>Travel Beyound Limits</h1>
                <h3>Start your travel at an effordable price with Travelly <br />
                We are here to help you find the best places in Nigeria.</h3>
                <button id='btn'>Book Now</button>
         </div>
      </div>
      <section id="locations">
        <header className="locations-head">
            <h2>The Perfect Travelling Experience.</h2>
          <h3>
            We cover everything from picking the pefect hotel, <br />
            flight and travelling destination.
          </h3>
         </header>
      </section>
      <section id='benefits'>
          <header className='benefits-head'>
                <h1>The Perfect Travel</h1>
                <h3>We cover everything from
                  flight to destination </h3>
          </header>
          <div className="cards">
            <div className="card">
            
              <h4>Travel</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, placeat.</p>
            </div>
            <div className="card">
                  <h4>Hotel</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo.</p>
            </div>
            <div className="card">
             <h4>Fly</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, ea?</p>
            </div>
          </div>
      </section>
      <section id="contact">
        <div className="form-wrapper">
        <header className='form-head'>
            <h2>Contact Us</h2>
        </header>
        <form action="">
          <div className="name-form">
              <label htmlFor="name">Name:</label>
              <input type="name" name="name" id="name" value={name} onChange={handleNameChange} placeholder='Your Name' required />
           </div>
           <div className="email-form">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} placeholder='Your Email' required />
           </div>
           <button id='btn' type="submit">Submit</button>
        </form>
        </div>
      </section>
  </main>
        
    </>
  )
}

export default HomePage
