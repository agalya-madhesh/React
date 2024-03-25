import { useState } from 'react'
import './App.css'

//images

import searchIcon from './assets/search1.png';
import cloudIcon from './assets/cloud.png';
import drizzleIcon from './assets/drizzle.jpeg';
import rainIcon from './assets/rains.png';
import humidityIcon from './assets/humidity.png';
import clearskyIcon from './assets/clearsky.png';
import snowIcon from './assets/snow.png';
import sunIcon from './assets/sun.png';

const WeatherDetails = ({icon, temp, city, country, lat, long}) => {
  return (
  <>
  <div className='image'>
    <img src={icon} alt='clear'/>
  </div>
  <div className="temp">{temp}°C</div>
  <div className="location">{city}</div>
  <div className="country">{country}</div>
  <div className='cord'>
    <div>
      <span className='lat'>Latitude</span>
      <span>{lat}</span>
    </div>

    <div>
      <span className='long'>Longitude</span>
      <span>{long}</span>
    </div>
  </div>
  </>);
}

function App() {
  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("India");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);


  return (
    <>
    <div className='container'>
      <div className='input-container'>
        <input type="text" className='cityInput' placeholder='Search City'/>
        <div className='search-icon'>
          <img src={searchIcon} alt="search"/>
        </div>
      </div>
    <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} long={long}/>
    </div>
    </>
  )
}

export default App
