import React from 'react'

const Countries = ({countries, country}) => {
    if (countries.length >= 10) {
        return (
          <>
            <div>Too many matches, specify another filter.</div>
          </>
        );
    }
      
    return (
        <ul>
        {countries?.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
      </ul>
    )
}


export default Countries;

 // } else if (countries.length === 1){
      //     return (
      //       <>
      //       <h1>{country.name}</h1>
      //        <span>Capital: {country.capital}</span>
      //         <span>Population: {country.population}</span>

      //       <h2>Languages</h2> 
      //         {countries?.languages.map(language => (
      //        <li key={language.name}>{language.name}</li>
      //       ))}
      //      </>
      //     )}
