import Dropdown from "./Dropdown";
import type { ListItem } from "../types/ListItem";

import styles from '../styles/Countries.module.css';

interface CountriesProps {
    selectedCountry: ListItem;
    setSelectedCountry: (countryObject: ListItem) => void;
    setSelectedState: (stateObject: ListItem) => void;
    countriesList: ListItem[];
}

function Countries({
    selectedCountry,
    setSelectedCountry,
    setSelectedState,
    countriesList
}: CountriesProps) {
    // function to find and select country
    function findAndSetSelectedCountry(countryId: number) {
        const country = countriesList.find(c => c.id === countryId);
        setSelectedCountry(country as ListItem);
        // reset state when new country is selected
        setSelectedState({id: 0, code: '', name: ''} as ListItem)
    }

    return (
        <div className={styles.main}>
            <p className={styles.label}>Country Selected: {selectedCountry.name}</p>
            <Dropdown 
                selected={selectedCountry}
                setSelected={findAndSetSelectedCountry}
                list={countriesList}
            />
        </div>
    )
}

export default Countries