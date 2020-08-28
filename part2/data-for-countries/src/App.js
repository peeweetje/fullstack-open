import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/input';
import Label from './components/label';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const searchCountries = (e) => {
    setCountries(e.target.value);
    console.log(setCountries(e.target.value));
  };

  return (
    <div>
      <Label>Find countries</Label>
      <Input onChange={searchCountries} />
    </div>
  );
}

export default App;
