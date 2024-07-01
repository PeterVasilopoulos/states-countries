import type { ListItem } from "../types/ListItem";
import { useGetStatesFromCountryCodeQuery } from "../app/service/statesApi";
import Dropdown from "./Dropdown";
import styles from '../styles/States.module.css';

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
    // get states data
    const {data} = useGetStatesFromCountryCodeQuery(selectedCountry?.code);

    // function to find and select state
    function findAndSetSelectedState(stateId: number) {
        const state = data?.find(s => s.id === stateId)
        setSelectedState(state as ListItem)
    }

    return (
        <div className={styles.main}>
            <p className={styles.label}>State Selected: {selectedState.name}</p>
            <Dropdown 
                selected={selectedState}
                setSelected={findAndSetSelectedState}
                list={data}
            />
        </div>
    )
}

export default States