import { useState } from 'react';
import styles from '../styles/Form.module.css';
import Button from './Button';

interface CountryFormData {
    name: string;
    code: string;
}

function CountryForm() {
    // variable to hold the form data
    const [formData, setFormData] = useState({name: '', code: ''} as CountryFormData);

    // destructure formData to use in value attribute of inputs
    const {name, code} = formData;

    // handle change input data
    function handleChangeInput(e: any) {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    // handle submit form
    function handleSubmit(e: any) {
        // prevent page from reloading
        e.preventDefault();

        // log the data
        console.log(formData)

        // reset formData
        setFormData({name: '', code: ''} as CountryFormData)
    }

    return (
        <form method="POST">
            {/* Country Name */}
            <div className={styles.inputBlock}>
                <label htmlFor="name">Country Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    className={styles.input} 
                    value={name}
                    onChange={handleChangeInput} 
                />
            </div>

            {/* Country Code */}
            <div className={styles.inputBlock}>
                <label htmlFor="code">Country Code:</label>
                <input 
                    type="text" 
                    name="code" 
                    className={styles.input} 
                    value={code}
                    onChange={handleChangeInput} 
                />
            </div>

            {/* Submit */}
            <div className={styles.submitBlock}>
                <Button handle={handleSubmit}>Submit</Button>
            </div>
        </form>
    )
}

export default CountryForm