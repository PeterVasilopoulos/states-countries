import React, { useState } from 'react';
import styles from '../styles/Form.module.css';
import Button from './Button';
import { StatusOptions } from '../types/StatusOptions';
import { CountryFormData } from '../types/CountryFormData';
import { useAddCountryMutation } from '../app/service/countriesApi';

function CountryForm() {
    // function for adding country
    const [addCountry] = useAddCountryMutation();

    // status variable
    const [status, setStatus] = useState('none' as StatusOptions);
    
    // variable to hold the form data
    const [formData, setFormData] = useState({name: '', code: ''} as CountryFormData);
    // destructure formData to use in value attribute of inputs
    const {name, code} = formData;

    // handle change input data
    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }


    // handle submit form with RTK Query
    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        // reset status
        setStatus('none');

        // check if data is missing
        if(!formData.name || !formData.code) {
            setStatus('missing');
            return;
        } else {
            setStatus('none');
        }

        // add new country
        addCountry(formData)
            .unwrap()
            .catch(() => {
                setStatus('codeInUse');
                return;
            });

        // set status to submitted
        setStatus('submitted');

        // reset form data
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