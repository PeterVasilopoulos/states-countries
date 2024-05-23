import styles from '../styles/Button.module.css';

interface ButtonProps {
    children: string;
    handle: (e: any) => void;
}

function Button({children, handle}: ButtonProps) {
    return (
        <button className={styles.button} onClick={(e) => handle(e)}>
            {children}
        </button>
    )
}

export default Button