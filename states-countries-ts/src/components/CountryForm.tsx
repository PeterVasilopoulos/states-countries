import { useState } from 'react';
import styles from '../styles/Form.module.css';
import Button from './Button';

interface CountryFormProps {
    reloadVar: boolean;
    setReloadVar: (bool: boolean) => void;
}

interface CountryFormData {
    name: string;
    code: string;
}

// POST URL
const POST_URL: string = 'https://xc-countries-api.fly.dev/api/countries/'

function CountryForm({setReloadVar, reloadVar}: CountryFormProps) {
    // variable to hold the form data
    const [formData, setFormData] = useState({name: '', code: ''} as CountryFormData);

    // destructure formData to use in value attribute of inputs
    const {name, code} = formData;

    // handle change input data
    function handleChangeInput(e: any) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    // handle submit form
    function handleSubmit(e: any) {
        // prevent page from reloading
        e.preventDefault();

        // post function
        async function postFormData(url: string, data: CountryFormData) {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            // flip reloadVar
            setReloadVar(!reloadVar)

            return response.json();
        }

        // call post function
        postFormData(POST_URL, formData);

        // reset formData
        setFormData({name: '', code: ''});
    }

    return (
        <form method="POST">
            {/* Country Name */}
            <div className={styles.inputBlock}>
                <label htmlFor="name">Country Name:</label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
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
                    id="code"
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