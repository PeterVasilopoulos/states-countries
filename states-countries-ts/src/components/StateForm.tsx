import { ListItem } from "../types/ListItem";
import styles from '../styles/Form.module.css';
import Button from "./Button";

interface StateFormProps {
    countriesList: ListItem[];
}

function StateForm({countriesList}: StateFormProps) {
    // handle submit form function
    function handleSubmit(e: any) {
        // prevent page from reloading
        e.preventDefault();
    }

    return (
        <form method="POST">
            {/* State Name */}
            <div className={styles.inputBlock}>
                <label htmlFor="name">State Name:</label>
                <input type="text" name="name" className={styles.input} />
            </div>

            {/* State Code */}
            <div className={styles.inputBlock}>
                <label htmlFor="code">State Code:</label>
                <input type="text" name="code" className={styles.input} />
            </div>

            {/* List of Countries */}
            <div className={styles.inputBlock}>
                <label htmlFor="countryId">Country:</label>
                <select name="countryId" className={styles.input}>
                    {countriesList.map((country) => {
                        return (
                            <option 
                                value={country.id}
                                key={country.id}
                            >{country.name}</option>
                        )
                    })}
                </select>
            </div>

            {/* Submit */}
            <div className={styles.submitBlock}>
                <Button handle={handleSubmit}>Submit</Button>
            </div>
        </form>
    )
}

export default StateForm