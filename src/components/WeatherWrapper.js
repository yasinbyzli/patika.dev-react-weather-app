import React, { useEffect } from 'react'
import axios from 'axios'
import { useWeather } from '../context/WeatherContext'
import Header from './Header';
import { useCity } from '../context/CityContext';
import WeatherList from './WeatherList';


const WeatherWrapper = () => {

    const { data, setData } = useWeather(); 

    const { city } = useCity();

    useEffect(() => {

        const getData = async (city) => {
            try {
               const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=8eee8757baee16c12b451514ed973fc8&units=metric`)
                setData(response.data.daily)
            } catch (error) {
                
            }  
        }

        getData(city);
    }, [city])

    

    

    return (
        <div className="wrapper">
            <Header />
            <WeatherList />
        </div>
    )
}

export default WeatherWrapper
