import axios from 'axios'

export const API = (city, country) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city + ',' + country}&appid=${process.env.REACT_APP_API_TOKEN}&units=metric`);