import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import type { ListItem } from "../types/ListItem";

import styles from '../styles/Countries.module.css';

interface CountriesProps {
    selectedCountry: ListItem;
    setSelectedCountry: any;
}

function Countries({
    selectedCountry, 
    setSelectedCountry, 
}: CountriesProps) {
    // variable to hold list of countries
    const [countriesList, setCountriesList] = useState([] as ListItem[])

    // function to find and select country
    function findAndSetSelectedCountry(countryId: number) {
        const country = countriesList.find(c => c.id === countryId);
        console.log(countryId);
        setSelectedCountry(country);
    }


    // hook to pull country data from api
    useEffect(() => {
        // variable to check if component is mounted
        let isMounted: boolean = true

        // function to fetch country data
        async function fetchData() {
        await fetch("https://xc-countries-api.fly.dev/api/countries/")
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
            <p>Country Selected: {selectedCountry.name}</p>
            <Dropdown 
                selected={selectedCountry}
                setSelected={findAndSetSelectedCountry}
                list={countriesList}
            />
        </div>
    )
}

export default Countries