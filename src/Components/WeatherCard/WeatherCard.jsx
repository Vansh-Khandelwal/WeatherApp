import React from 'react'

const WeatherCard = ({weather, city}) => {

    const img1 = {
      "Rain": '/card/rainy.jpg', 
      "Clear": '/card/sunny.jpg', 
      "Snow": '/card/snowy.jpg',
      "Drizzle": '/card/drizzle.jpg', 
      "ThunderStorm": '/card/thunderstorm.jpg',
      "Clouds" : "/card/cloudy.jpg",
      "Haze": '/card/haze.jpg',
      "Dust": '/card/dusty.jpg',
      "Fog": '/card/foggy.jpg',
      "Sand": '/card/sandy.jpg',
      "Smoke": '/card/smoky.jpg',
      "Mist": '/card/misty.jpg',
      "Ash": '/card/ashy.jpg', 
      "Tornado": '/card/tornado.jpg',
      "Squall": '/card/squall.jpg',
    };

  return (
    <div className="flex items-center justify-center bg-white rounded">
      <div className="max-w-md rounded overflow-hidden shadow-lg">
        <img className="w-full h-60 " src={process.env.PUBLIC_URL + img1[weather.weather[0].main]} alt="weather illustration"/>
          <div className="px-6 py-4">
            <div className="font-bold mb-1 flex items-center text-3xl text-slate-600">{weather.weather[0].main} <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" className="w-12"/> </div>
              <hr className="mb-2"/>
              <p className="text-gray-800 text-base">
                  <b><i>Temperature:</i></b> {weather.main.temp} <br/>
                  <b><i>Feels like:</i></b>  {weather.main.feels_like} <br/>
                  <b><i>Pressure:</i></b>  {weather.main.pressure} <br/>
              </p>
          </div>
          <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Wind Speed: {weather.wind.speed}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Visibility: {weather.visibility}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Humidity: {weather.main.humidity}</span>
          </div>

        <div className="text-slate-600 font-medium italic px-6 py-4"><u>Location:</u> <span className="not-italic text-slate-800">{weather.name}, {weather.sys.country}</span></div>
      </div>
    </div>
  )
}

export default WeatherCard