import React from 'react'
import { useWeather } from '../context/WeatherContext'
import WeatherCard from './WeatherCard'

const WeatherList = () => {
    const {data} = useWeather();
    return (
        <ul>
            {
                data?.map((weather, index) => (
                    <WeatherCard 
                        key={index} 
                        temp={weather.temp} 
                        dt={weather.dt}
                        humidity={weather.humidity}
                        wind={weather.wind_deg}
                        weather={weather.weather[0]}
                    />
                ))
            }
            
        </ul>
    )
}

export default WeatherList
