import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import type { ListItem } from './types/ListItem';

import './styles/index.css';
import styles from './styles/App.module.css';
import Home from './pages/Home';
import AddCountry from './pages/AddCountry';
import AddState from './pages/AddState';
import Navbar from './components/Navbar';

// Get all countries url
const GET_URL = "http://localhost:5257/api/Countries"

function App() {
  // list of countries
  const [countriesList, setCountriesList] = useState([] as ListItem[]);

  // variable to check if a change has been made
  const [changeMade, setChangeMade] = useState(true as boolean);

  // pull countries data from api
  useEffect(() => {
    if(changeMade) {
      getCountries();
      setChangeMade(false);
    }
  }, [changeMade])

  // get country data function
  async function getCountries() {
    return await fetch(GET_URL)
      .then(response => response.json())
      .then(data => {
        // place sorted list into state
        setCountriesList(data.sort((a: ListItem, b: ListItem) => 
            a.name.localeCompare(b.name)
        ))
      })
  }

  return (
    <div>
      {/* Navbar */}
      <div className={styles.nav}>
        <Navbar />
      </div>

      {/* Routes */}
      <div className={styles.content}>
        <Routes>

          {/* Home Page */}
          <Route path='/' element={
            <Home />
          } />

          {/* Add Country Page */}
          <Route path='/addcountry' element={
            <AddCountry setChangeMade={setChangeMade} />
          } />

          {/* Add State Page */}
          <Route path='/addstate' element={
            <AddState countriesList={countriesList} />
          } />
          
        </Routes>
      </div>
    </div>
  )
}

export default App