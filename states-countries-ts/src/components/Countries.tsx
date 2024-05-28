import { useEffect } from "react";
import Dropdown from "./Dropdown";
import type { ListItem } from "../types/ListItem";

import styles from '../styles/Countries.module.css';

interface CountriesProps {
    selectedCountry: ListItem;
    setSelectedCountry: (countryObject: ListItem) => void;
    setSelectedState: (stateObject: ListItem) => void;
    countriesList: ListItem[];
    setCountriesList: (countries: ListItem[]) => void;
    reloadVar: boolean;
}

function Countries({
    selectedCountry,
    setSelectedCountry,
    setSelectedState,
    countriesList,
    setCountriesList,
    reloadVar
}: CountriesProps) {
    // function to find and select country
    function findAndSetSelectedCountry(countryId: number) {
        const country = countriesList.find(c => c.id === countryId);
        setSelectedCountry(country as ListItem);
        // reset state when new country is selected
        setSelectedState({id: 0, code: '', name: ''} as ListItem)
    }

    // hook to pull country data from api
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
    }, [reloadVar])

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