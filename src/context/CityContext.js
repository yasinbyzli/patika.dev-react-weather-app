import { createContext, useContext, useState } from "react";

const CityContext = createContext();

const CityProvider = ({children}) => {

    const [city, setCity] = useState(null)

    const values = {
        city,
        setCity
    }

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>

}

const useCity = () => useContext(CityContext);

export {CityProvider, useCity}