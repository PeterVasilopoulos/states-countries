import React, { useState } from 'react';
import styles from '../styles/Form.module.css';
import Button from './Button';
import { StatusOptions } from '../types/StatusOptions';

interface CountryFormData {
    name: string;
    code: string;
}

// POST URL
const POST_URL: string = "http://localhost:5257/api/Countries";

function CountryForm() {
    // variable to hold the form data
    const [formData, setFormData] = useState({name: '', code: ''} as CountryFormData);

    // status variable
    const [status, setStatus] = useState('none' as StatusOptions);

    // destructure formData to use in value attribute of inputs
    const {name, code} = formData;

    // handle change input data
    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    // handle submit form
    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        // prevent page from reloading
        e.preventDefault();

        // post function
        async function postFormData(url: string, data: CountryFormData) {
            // check if name or code are empty
            if(!data.name || !data.code) {
                setStatus('missing')
                return
            } else {
                setStatus('none')
            }

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            
            // check for 409 error
            if(response.status === 409) {
                setStatus('codeInUse');
                return;
            }

            // set status to submitted
            setStatus('submitted');
            
            return response.json();
        }

        // call post function
        postFormData(POST_URL, formData);

        // reset formData
        setFormData({name: '', code: ''});
    }

    return (
        <form>
            {/* Status Checking */}

            {/* Missing Fields */}
            {status === 'missing' ? 
                <div className={`${styles.error} ${styles.status}`}>
                    Please fill out all fields
                </div>
            : null
            }

            {/* Code In Use */}
            {status === 'codeInUse' ? 
                <div className={`${styles.error} ${styles.status}`}>
                    Code already in use
                </div>
            : null
            }

            {/* Country Submitted */}
            {status === 'submitted' ? 
                <div className={styles.status}>
                    Country successfully submitted
                </div>
            : null
            }



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