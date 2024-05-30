import { useState } from 'react';
import Countries from '../components/Countries';
import States from '../components/States';
import styles from '../styles/Home.module.css';
import { ListItem } from '../types/ListItem';

interface HomeProps {
    countriesList: ListItem[];
}

function Home({countriesList}: HomeProps) {
    // variable to hold the selected country
    const [selectedCountry, setSelectedCountry] = useState({id: 0, code: '', name: ''} as ListItem)

    // variable to hold the selected state
    const [selectedState, setSelectedState] = useState({id: 0, code: '', name: ''} as ListItem)

    return (
        <div className={styles.box}>
            {/* Title */}
            <h1 className={styles.title}>Countries and States</h1>

            <div className={styles.content}>
                <Countries 
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    setSelectedState={setSelectedState}
                    countriesList={countriesList}
                />
                <States
                    selectedState={selectedState}
                    setSelectedState={setSelectedState}
                    selectedCountry={selectedCountry}
                />
            </div>
        </div>
    )
}

export default Home