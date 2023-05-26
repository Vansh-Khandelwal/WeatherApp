import axios from 'axios'

export const API = (city, country) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city + ',' + country}&appid=31aaf3aec453ee4eaa03b842b89f639f&units=metric`);