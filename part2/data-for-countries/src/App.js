import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/input';
import Label from './components/label';
import Countries from './components/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      if (search !== '') {
        const searchResult = response.data.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        );
        setCountries(searchResult);
      }
    });
  }, [search]);

  useEffect(() => {
    const baseUrl = "http://api.weatherstack.com/current";
    const ACCESS_KEY = process.env.REACT_APP_API_KEY;
    if (countries.length === 1) {
      const searchCapital = countries.map(country => country.capital);
      if (searchCapital[0]) {
        axios
          .get(`${baseUrl}?access_key=${ACCESS_KEY}&query=${searchCapital[0]}`)
          .then(response => {
            setWeatherData(response.data);
          });
      }
    }
  }, [countries]);

  const searchCountries = (event) => {
    setSearch(event.target.value);
  };

  const handleShowCountry = countryName => {
    setSearch(countryName);
  };

  return (
    <>
      <Label>Find countries</Label>
      <Input value={search} onChange={searchCountries} />
      <Countries countries={countries} handleShowCountry={handleShowCountry}  weatherData={weatherData}/>
    </>
  );
}

export default App;
