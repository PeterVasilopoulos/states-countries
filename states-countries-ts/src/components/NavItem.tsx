import styles from '../styles/NavItem.module.css';

interface NavItemProps {
    children: string;
    page: string;
}

function NavItem({children, page}: NavItemProps) {

    function handleClick() {

    }

    return (
        <div className={styles.navItem} onClick={handleClick}>
            {children}
        </div>
    )
}

export default NavItem