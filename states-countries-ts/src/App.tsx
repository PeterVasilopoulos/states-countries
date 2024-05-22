import { useState } from 'react';
import type { ListItem } from './types/ListItem';

import Countries from './components/Countries';
import States from './components/States';
import styles from './styles/App.module.css';
import './styles/index.css';

function App() {
  // variable to hold the selected country
  const [selectedCountry, setSelectedCountry] = useState({} as ListItem)

  // variable to hold the selected state
  const [selectedState, setSelectedState] = useState({} as ListItem)

  return (
    <div className={styles.main}>
      <Countries 
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <States 
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        selectedCountry={selectedCountry}
      />


    </div>
  )
}

export default App