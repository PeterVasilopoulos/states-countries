import { useState, useEffect } from 'react';
import styles from './styles/App.module.css';

import Countries from './components/Countries';
import Dropdown from './components/Dropdown';
import './styles/index.css';

function App() {
  // variable to hold the selected country
  const [selectedCountry, setSelectedCountry] = useState('')

  // variable to hold list of countries
  const [countriesList, setCountriesList] = useState([])


  // hook to pull data from api
  useEffect(() => {
    // variable to check if component is mounted
    let isMounted: boolean = true

    // fetch data
    function fetchData() {
      fetch("https://xc-countries-api.fly.dev/api/countries/")
        .then(response => response.json())
        .then(data => 
          {
            if(isMounted) {
            setCountriesList(data)}
            console.log(data)
          }
        )
    }

    // run function
    fetchData()

    // cleanup
    return () => {
      isMounted = false
    }
  }, [])


  return (
    <div className={styles.main}>
      <Countries selectedCountry={selectedCountry}>

        <Dropdown 
          selected={selectedCountry} 
          setSelected={setSelectedCountry} 
          list={countriesList} 
        />
        
      </Countries>

    </div>
  )
}

export default App