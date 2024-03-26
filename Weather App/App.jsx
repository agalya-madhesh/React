import { useState, useEffect} from 'react'
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
import windIcon from './assets/wind.png';

const WeatherDetails = ({icon, temp, city, country, lat, long, humidity, wind}) => {
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
  <div className='data-container'>
    <div className='element'>
    <img src={humidityIcon} alt="" className='icon'/>
    <div className='data'>
      <div className='humidity-percent'>{humidity}%</div>
        <div className='text'>Humidity</div>
      </div>
      </div>

      <div className='element'>
    <img src={windIcon} alt="" className='icon'/>
    <div className='data'>
      <div className='wind-percent'>{wind}km/hr</div>
        <div className='text'>Wind Speed</div>
      </div>
      </div>
  </div>

  </>);
}


function App() {
  const[text,setText]=useState("chennai");
  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [humidity, setHumidity] =useState(0);
  const [wind, setWind] =useState(0);

  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const weatherIconMap= {
    "01d" : clearskyIcon,
    "01n" : clearskyIcon,
    "02d" : cloudIcon,
    "02n" : cloudIcon,
    "03d" : drizzleIcon,
    "03n" : drizzleIcon,
    "04d" : drizzleIcon,
    "04n" : drizzleIcon,
    "09d" : rainIcon,
    "09n" : rainIcon,
    "10d" : rainIcon,
    "10n" : rainIcon,
    "13d" : snowIcon,
    "13n" : snowIcon,


  }

  const search = async () => {
    setLoading(true);
    let api_key = "0790b028e4ad2ebf8e36789b9c810bfc";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}`;
  
    try {
      let res = await fetch(url);
      let data = await res.json();
  
      if (data.cod === "404") {
        console.log("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
  
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLong(data.coord.lon);
      const weatherIconCode= data.weather[0].icon;
      setIcon(weatherIconMap [weatherIconCode] || clearskyIcon);
      setCityNotFound(false);

    } catch (error) {
      console.error("An error occurred:", error.message);
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };
  
const handleCity=(e) =>{
  setText(e.target.value);
};

const handleKeyDown=(e)=>{
  if (e.key=="Enter"){
    search();
  }
};

useEffect(function(){
search();
}, []);


  return (
    <>
    <div className='container'>
      <div className='input-container'>
        <input type="text" className='cityInput' placeholder='Search City' onChange={handleCity} value={text} onKeyDown={handleKeyDown}/>
        <div className='search-icon' onClick={() => search()}>
          <img src={searchIcon} alt="search"/>
        </div>
      </div>

    {loading && <div className="loading-message">Loading...</div>}
    {error && <div className="error-message">{error}</div>}
    {cityNotFound && <div className="city-not-found">City Not Found</div>}


    {!loading &&  !cityNotFound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} long={long} 
    humidity={humidity} wind={wind}/>}
    
    </div>
    </>
  )
}

export default App
