import {createContext, useContext, useState} from 'react';

const WeatherContext = createContext();


const WeatherProvider = ({children}) => {

    const [data, setData] = useState(null);

    const values = {
        data,
        setData
    }


    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    )
}

const useWeather = () => useContext(WeatherContext);

export {WeatherProvider, useWeather}