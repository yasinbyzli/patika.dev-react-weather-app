import { createContext, useContext, useState } from "react";

const CityContext = createContext();

const CityProvider = ({children}) => {

    const [city, setCity] = useState({
        "plaka": 34,
        "il_adi": "İSTANBUL",
        "lat": 41.00527,
        "lon": 28.97696,
        "northeast_lat": 41.320786,
        "northeast_lon": 29.456456,
        "southwest_lat": 40.80275,
        "southwest_lon": 27.971307
      })

    const values = {
        city,
        setCity
    }

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>

}

const useCity = () => useContext(CityContext);

export {CityProvider, useCity}