import StateForm from '../components/StateForm';
import styles from '../styles/Home.module.css';

function AddState() {
    return (
        <div className={styles.box}>
            {/* Title */}
            <h1 className={styles.title}>Add a State</h1>

            {/* Form */}
            <div className={styles.content}>
                <StateForm />
            </div>

        </div>
    )
}

export default AddState