import React, { useState } from 'react'
import cities from '../cities.json'
import { useCity } from '../context/CityContext'


const Header = () => {

    const {setCity} = useCity();

    const handleChangeCity = (e) => {
        setCity(e)
    }
    
    return (
        <div className="header">
            <select name="" id="" onChange={(e) => handleChangeCity(JSON.parse(e.target.value))}>
                {
                    cities.iller.map(city => (
                        <option  
                            key={city.plaka} 
                            value={JSON.stringify(city)}
                            selected={city.plaka == 34}
                        >
                            {city.il_adi}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Header
