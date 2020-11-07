import React from 'react'

const countryInfo = ({country}) => {
    return (
        <>
         <h1>{country.name}</h1>
          <span>Capital: {`${country.capital}`}</span>
          <span>Population: {`${country.population}`}</span>

         <h2>Languages</h2> 
           {country?.languages.map(language => (
             <li key={language.name}>{language.name}</li>
            ))}
             <img
              src={country.flag}
              alt={`Flag of ${country.name}`}
              width="100rem"
              height="100rem"
            />
        </>
    )
}

export default countryInfo;
