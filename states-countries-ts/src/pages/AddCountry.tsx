import CountryForm from '../components/CountryForm';
import styles from '../styles/Home.module.css';

function AddCountry() {
    // variable to decide which item is added

    return (
        <div className={styles.box}>
            {/* Title */}
            <h1 className={styles.title}>Add a Country</h1>

            {/* Forms */}
            <div className={styles.content}>
                <CountryForm />
            </div>
        </div>
    )
}

export default AddCountry