import Dropdown from "./Dropdown";
import type { ListItem } from "../types/ListItem";
import { useGetAllCountriesQuery } from "../app/service/countriesApi";

import styles from '../styles/Countries.module.css';

interface CountriesProps {
    selectedCountry: ListItem;
    setSelectedCountry: (countryObject: ListItem) => void;
    setSelectedState: (stateObject: ListItem) => void;
}

function Countries({
    selectedCountry,
    setSelectedCountry,
    setSelectedState,
}: CountriesProps) {
    // country data
    const {data} = useGetAllCountriesQuery();

    // function to find and select country
    function findAndSetSelectedCountry(countryId: number) {
        const country = data?.find(c => c.id === countryId);
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
                list={data ?? []}
            />
        </div>
    )
}

export default Countries