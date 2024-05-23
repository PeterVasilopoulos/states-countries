import styles from '../styles/ClickBox.module.css';

interface ClickBoxProps {
    children: string;
    setter: (name: string) => void;
    checker: string;
}

function ClickBox({children, setter, checker}: ClickBoxProps) {
    // handle click function
    function handleClick() {
        setter(children);
    }

    return (
        <span
            onClick={handleClick}
            className={`${styles.clickbox} ${checker === children ? styles.active : styles.inactive}`}
        >
            {children}
        </span>
    )
}

export default ClickBox