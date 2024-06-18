import StateForm from '../components/StateForm';
import styles from '../styles/Home.module.css';
import { ListItem } from '../types/ListItem';

interface AddStateProps {
    countriesList: ListItem[];
}

function AddState({
    countriesList
}: AddStateProps) {
    return (
        <div className={styles.box}>
            {/* Title */}
            <h1 className={styles.title}>Add a State</h1>

            {/* Form */}
            <div className={styles.content}>
                <StateForm 
                    countriesList={countriesList} 
                />
            </div>

        </div>
    )
}

export default AddState