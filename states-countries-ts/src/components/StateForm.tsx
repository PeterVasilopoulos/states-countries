import React, { useState } from "react";
import { StatusOptions } from "../types/StatusOptions";
import { useGetAllCountriesQuery } from "../app/service/countriesApi";
import { ListItem } from "../types/ListItem";
import { StateFormData } from "../types/StateFormData";
import { useAddStateMutation } from "../app/service/statesApi";
import styles from '../styles/Form.module.css';
import Button from "./Button";

function StateForm() {
    // get countries data
    const {data: countriesData} = useGetAllCountriesQuery();
    // function for adding state
    const [addState] = useAddStateMutation();

    // status variable
    const [status, setStatus] = useState('none' as StatusOptions);

    // variable to hold form data
    const [formData, setFormData] = useState({name: '', code: '', countryId: -1} as StateFormData);
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


    // handle submit form with rtk query
    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        // reset status
        setStatus('none');

        // check if data is missing
        if(!formData.name || !formData.code || formData.countryId === -1) {
            setStatus('missing');
            return
        } else {
            setStatus('none');
        }

        // add new state
        addState(formData)
            .unwrap()
            .catch(() => {
                setStatus('codeInUse');
                return;
        });
        
        // set status to submitted
        setStatus('submitted');

        // reset form data
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

                    {countriesData?.map((country: ListItem) => {
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