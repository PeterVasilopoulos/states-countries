import styles from '../styles/Navbar.module.css';
import NavItem from './NavItem';

function Navbar() {
    return (
        <div className={styles.navbar}>
            {/* Home */}
            <NavItem page='/'>Home</NavItem>

            {/* Add Country */}
            <NavItem page='/addcountry'>Add Country</NavItem>

            {/* Add State */}
            <NavItem page='/addstate'>Add State</NavItem>
        </div>
    )
}

export default Navbar