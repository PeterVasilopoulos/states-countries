import styles from '../styles/Form.module.css';
import Button from './Button';

function CountryForm() {
    // handle submit form function
    function handleSubmit(e: any) {
        // prevent page from reloading
        e.preventDefault();
    }

    return (
        <form>
            {/* Country Name */}
            <div className={styles.inputBlock}>
                <label htmlFor="name">Country Name:</label>
                <input type="text" name="name" className={styles.input} />
            </div>

            {/* Country Code */}
            <div className={styles.inputBlock}>
                <label htmlFor="code">Country Code:</label>
                <input type="text" name="code" className={styles.input}/>
            </div>

            {/* Submit */}
            <div className={styles.submitBlock}>
                <Button handle={handleSubmit}>Submit</Button>
            </div>
        </form>
    )
}

export default CountryForm