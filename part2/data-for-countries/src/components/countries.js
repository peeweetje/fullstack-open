import React from 'react'
import CountryInfo from './country-info'

const Countries = ({countries}) => {
    if (countries && countries.length >= 10) {
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
           </ul>
         )} 
         
    return (
      <>
        <ul>
        { countries?.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
      </ul> 
    </>
    )   
}


export default Countries;

 