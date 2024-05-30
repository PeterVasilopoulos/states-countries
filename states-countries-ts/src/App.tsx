import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { ListItem } from './types/ListItem';

import './styles/index.css';
import styles from './styles/App.module.css';
import Home from './pages/Home';
import AddCountry from './pages/AddCountry';
import AddState from './pages/AddState';
import Navbar from './components/Navbar';

function App() {
  // list of countries
  const [countriesList, setCountriesList] = useState([] as ListItem[])

  // pull countries data from api
  useEffect(() => {
    // variable to check if component is mounted
    let isMounted: boolean = true

    // function to fetch country data
    async function fetchData() {
    await fetch("https://xc-countries-api.fly.dev/api/countries/")
        .then(response => response.json())
        .then(data => {
            if(isMounted) {
                // place sorted list into state
                setCountriesList(data.sort((a: ListItem, b: ListItem) => 
                    a.name.localeCompare(b.name)
                ))
            }
        })
    }

    // run function
    fetchData()

    // cleanup
    return () => {
    isMounted = false
    }
}, [])

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
            <Home countriesList={countriesList} />
            } />

          {/* Add Country Page */}
          <Route path='/addcountry' element={
            <AddCountry />
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