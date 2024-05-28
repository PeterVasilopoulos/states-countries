import { useState } from 'react';
import ClickBox from '../components/ClickBox';
import CountryForm from '../components/CountryForm';
import StateForm from '../components/StateForm';
import styles from '../styles/Home.module.css';
import { ListItem } from '../types/ListItem';

interface AddCountryProps {
    countriesList: ListItem[];
}

function AddCountry({countriesList}: AddCountryProps) {
    // variable to decide which item is added
    const [itemToAdd, setItemToAdd] = useState('Country')

    return (
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
                <CountryForm />
                :
                <></>
                }

                {
                itemToAdd === 'State' ?
                <StateForm countriesList={countriesList}/>
                :
                <></>
                }
            </div>
        </div>
    )
}

export default AddCountry