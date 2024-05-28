import { useState } from 'react';
import type { ListItem } from './types/ListItem';

import Countries from './components/Countries';
import States from './components/States';
import styles from './styles/App.module.css';
import './styles/index.css';
import ClickBox from './components/ClickBox';
import CountryForm from './components/CountryForm';
import StateForm from './components/StateForm';

function App() {
  // variable to reload data
  const [reloadVar, setReloadVar] = useState(false as boolean)

  // variable to hold the selected country
  const [selectedCountry, setSelectedCountry] = useState({} as ListItem)

  // variable to hold the selected state
  const [selectedState, setSelectedState] = useState({} as ListItem)

  // variable to decide which item is added
  const [itemToAdd, setItemToAdd] = useState('Country')

  // list of countries
  const [countriesList, setCountriesList] = useState([] as ListItem[])

  return (
    <>
      {/* Select Country and State Box */}
      <div className={styles.box}>
        {/* Title */}
        <h1 className={styles.title}>Countries and States</h1>

        <div className={styles.content}>
          <Countries 
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            setSelectedState={setSelectedState}
            countriesList={countriesList}
            setCountriesList={setCountriesList}
            reloadVar={reloadVar}
          />
          <States 
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            selectedCountry={selectedCountry}
            reloadVar={reloadVar}
          />
        </div>
      </div>


      {/* Add Country or State Box */}
      <div className={styles.box}>
        {/* Title */}
        <h1 className={styles.title}>
          Add a
          {/* State ClickBox */}
          &nbsp;<ClickBox 
            checker={itemToAdd}
            setter={setItemToAdd}
          >Country</ClickBox>

          {/* Country ClickBox */}
          &nbsp;<ClickBox 
            checker={itemToAdd}
            setter={setItemToAdd}
          >State</ClickBox>
        </h1>

        {/* Forms */}
        <div className={styles.content}>
          {
            itemToAdd === 'Country' ? 
            <CountryForm reloadVar={reloadVar} setReloadVar={setReloadVar} />
            :
            <></>
          }

          {
            itemToAdd === 'State' ?
            <StateForm reloadVar={reloadVar} setReloadVar={setReloadVar} countriesList={countriesList}/>
            :
            <></>
          }
        </div>
      </div>
    </>
  )
}

export default App