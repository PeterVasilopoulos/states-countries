import CountryForm from '../components/CountryForm';
import styles from '../styles/Home.module.css';

interface AddCountryProps {
    setChangeMade: (value: boolean) => void;
}

function AddCountry({
    setChangeMade
}: AddCountryProps) {
    // variable to decide which item is added

    return (
        <div className={styles.box}>
            {/* Title */}
            <h1 className={styles.title}>Add a Country</h1>

            {/* Forms */}
            <div className={styles.content}>
                <CountryForm
                    setChangeMade={setChangeMade}
                />
            </div>
        </div>
    )
}

export default AddCountry