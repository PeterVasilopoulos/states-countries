import styles from '../styles/Dropdown.module.css';
import type { ListItem } from '../types/ListItem';

interface DropdownProps {
    selected: ListItem;
    setSelected: (idValue: number) => void;
    list: ListItem[];
}

function Dropdown({selected, setSelected, list}: DropdownProps) {
    return (
        <select 
            className={styles.menu}
            value={selected.id}
            defaultValue={""}
            onChange={e => setSelected(parseInt(e.target.value))}
        >
            <option value="" disabled >Select an Item</option>

            {/* map through list */}
            {list.map((item: ListItem) => {
                return (
                    <option
                        value={item.id}
                        key={item.id}
                    >
                        {item.name}
                    </option>
                )
            })}
        </select>
    )
}

export default Dropdown