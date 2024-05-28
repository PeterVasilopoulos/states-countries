import React, { ReactText, useState } from "react";
import { ListItem } from "../types/ListItem";
import styles from '../styles/Form.module.css';
import Button from "./Button";

interface StateFormProps {
    countriesList: ListItem[];
}

interface StateFormData {
    name: string;
    code: string;
    countryId: number;
}

// post url
const POST_URL = "https://xc-countries-api.fly.dev/api/states/"

function StateForm({countriesList}: StateFormProps) {
    // variable to hold form data
    const [formData, setFormData] = useState({name: '', code: '', countryId: -1})

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
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            return response.json();
        }

        // call post function
        postFormData(POST_URL, formData);

        // reset formData
        setFormData({name: '', code: '', countryId: -1})
    }

    return (
        <form method="POST">
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