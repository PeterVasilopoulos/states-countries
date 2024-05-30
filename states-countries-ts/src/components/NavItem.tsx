import { useNavigate } from 'react-router-dom';
import styles from '../styles/NavItem.module.css';

interface NavItemProps {
    children: string;
    page: string;
}

function NavItem({children, page}: NavItemProps) {
    const nav = useNavigate();

    function handleClick() {
        nav(page);
    }

    return (
        <div className={styles.navItem} onClick={handleClick}>
            {children}
        </div>
    )
}

export default NavItem