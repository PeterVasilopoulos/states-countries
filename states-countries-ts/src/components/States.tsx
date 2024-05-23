import { useState, useEffect } from "react"
import type { ListItem } from "../types/ListItem";
import Dropdown from "./Dropdown";
import styles from '../styles/States.module.css'

interface StatesProps {
    selectedState: ListItem;
    setSelectedState: (stateObject: ListItem) => void;
    selectedCountry: ListItem;
}

function States({
    selectedState, 
    setSelectedState, 
    selectedCountry, 
}: StatesProps) {
    // variable to hold list of states
    const [statesList, setStatesList] = useState([] as ListItem[])

    // function to find and select state
    function findAndSetSelectedState(stateId: number) {
        const state = statesList.find(s => s.id === stateId)
        setSelectedState(state as ListItem)
    }

    // hook to pull state data from api
    useEffect(() => {
        // variable to check if component is mounted
        let isMounted: boolean = true

        // function to fetch state data
        async function fetchData() {
        await fetch(`https://xc-countries-api.fly.dev/api/countries/${selectedCountry.code}/states/`)
            .then(response => response.json())
            .then(data => {
            if(isMounted) {
                setStatesList(data)
            }
            })
        }

        // run function if a country is selected
        if(selectedCountry.id) {
            fetchData()
        }

        // cleanup
        return () => {
            isMounted = false
        }
    }, [selectedCountry])

    return (
        <div className={styles.main}>
            {selectedCountry.id ?
                <>
                    <p className={styles.label}>State Selected: {selectedState.name}</p>
                    <Dropdown 
                        selected={selectedState}
                        setSelected={findAndSetSelectedState}
                        list={statesList}
                    />
                </>
            :
                <></>
            }   
        </div>
    )
}

export default States