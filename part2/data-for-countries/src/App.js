import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/input';
import Label from './components/label';
import Countries from './components/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

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
      <Countries countries={countries} handleShowCountry={handleShowCountry}/>
    </>
  );
}

export default App;
