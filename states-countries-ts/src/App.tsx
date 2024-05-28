import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import type { ListItem } from './types/ListItem';

import './styles/index.css';
import Home from './pages/Home';
import AddCountry from './pages/AddCountry';

function App() {
  // variable to hold the selected country
  const [selectedCountry, setSelectedCountry] = useState({id: 0, code: '', name: ''} as ListItem)

  // variable to hold the selected state
  const [selectedState, setSelectedState] = useState({id: 0, code: '', name: ''} as ListItem)

  // list of countries
  const [countriesList, setCountriesList] = useState([] as ListItem[])

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path='/' element={
          <Home
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            countriesList={countriesList}
            setCountriesList={setCountriesList}
          />
        } />

        {/* Add Country Page */}
        <Route path='AddCountry' element={
          <AddCountry 
            countriesList={countriesList}
          />
        } />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App