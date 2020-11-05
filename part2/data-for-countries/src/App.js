import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/input';
import Label from './components/label';

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
        console.log(searchResult);
      }
    });
  }, [search]);

  const searchCountries = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <Label>Find countries</Label>
      <Input value={search} onChange={searchCountries} />
      <ul>
        {
          countries?.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
