import Countries from '../components/Countries';
import States from '../components/States';
import styles from '../styles/Home.module.css';
import { ListItem } from '../types/ListItem';

interface HomeProps {
    selectedCountry: ListItem;
    setSelectedCountry: (countryObject: ListItem) => void;
    selectedState: ListItem;
    setSelectedState: (statObject: ListItem) => void;
    countriesList: ListItem[];
    setCountriesList: (countries: ListItem[]) => void;
}

function Home({
    selectedCountry,
    setSelectedCountry,
    selectedState,
    setSelectedState,
    countriesList,
    setCountriesList
}: HomeProps) {
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
                    setCountriesList={setCountriesList}
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