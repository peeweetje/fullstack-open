import React from 'react'
import CountryInfo from './country-info'
import WeatherInfo from './weather-info'

const Countries = ({countries, handleShowCountry, weatherData}) => {

    if (countries.length >= 10) {
        return (
          <>
            <div>Too many matches, specify another filter.</div>
          </>
        );
    }

    else if (countries.length === 1){
          return (
             <ul>
           {countries?.map(country => (
            <CountryInfo key={country.name} country={country}/>
          ))}
           <>
           <WeatherInfo weatherData={weatherData}/>
           </>
           </ul>
          
         )} 
         
    return (
      <>
        <ul>
        { countries?.map((country) => (
            <li key={country.name}>{country.name}
            <button  onClick={() => handleShowCountry(country.name)}>show</button>
            </li>
          ))}
      </ul> 
    </>
    )   
}


export default Countries;

 