import React, { useState } from "react";
import { ListItem } from "../types/ListItem";
import styles from '../styles/Form.module.css';
import Button from "./Button";
import { StatusOptions } from "../types/StatusOptions";

interface StateFormProps {
    countriesList: ListItem[];
}

interface StateFormData {
    name: string;
    code: string;
    countryId: number;
}

// post url
const POST_URL : string = "http://localhost:5257/api/States";

function StateForm({countriesList}: StateFormProps) {
    // variable to hold form data
    const [formData, setFormData] = useState({name: '', code: '', countryId: -1})

    // status variable
    const [status, setStatus] = useState('none' as StatusOptions)

    // destructure formData to use in value attribute of inputs
    const {name, code, countryId} = formData;

    // handle change input data
    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    // handle change select data
    function handleChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // handle submit form function
    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        // prevent page from reloading
        e.preventDefault();

        // post function
        async function postFormData(url: string, data: StateFormData) {
            // check if name or code is empty
            if(!data.name || !data.code || data.countryId === -1) {
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
            setStatus('submitted')

            return response.json();
        }

        // call post function
        postFormData(POST_URL, formData);

        // reset formData
        setFormData({name: '', code: '', countryId: -1})
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

            {/* State Submitted */}
            {status === 'submitted' ? 
                <div className={styles.status}>
                    State successfully submitted
                </div>
            : null
            }



            {/* State Name */}
            <div className={styles.inputBlock}>
                <label htmlFor="name">State Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    className={styles.input}
                    value={name}
                    onChange={handleChangeInput}
                />
            </div>

            {/* State Code */}
            <div className={styles.inputBlock}>
                <label htmlFor="code">State Code:</label>
                <input 
                    type="text" 
                    name="code" 
                    id="code"
                    className={styles.input} 
                    value={code}
                    onChange={handleChangeInput}
                />
            </div>

            {/* List of Countries */}
            <div className={styles.inputBlock}>
                <label htmlFor="countryId">Country:</label>
                <select 
                    name="countryId" 
                    id="countryId"
                    className={styles.input}
                    value={countryId}
                    onChange={handleChangeSelect}
                >
                    <option value={-1} disabled>Select a Country...</option>

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