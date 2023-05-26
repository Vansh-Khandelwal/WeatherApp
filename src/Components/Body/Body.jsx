import React from 'react'
import { useState } from 'react'
import Form from '../Form/Form.jsx'
import WeatherCard from '../WeatherCard/WeatherCard.jsx';

const Body = () => {

  const [weather, setWeather] = useState(null);

  return (
    <div className="flex items-center justify-center p-8 gap-10 bg-slate-300">
      <div className="bg-black w-16 rounded-full absolute"></div>
      <Form setWeather={setWeather}/>
      {weather?<WeatherCard weather={weather}/>:<></>}
    </div>
  )
}

export default Body