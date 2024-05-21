import styles from '../styles/Dropdown.module.css';

type ListItem = {
    id: number;
    code: string;
    name: string;
    countryID?: number;
}

interface DropdownProps {
    selected: string;
    setSelected: any;
    list: ListItem[];
}

function Dropdown({selected, setSelected, list}: DropdownProps) {


    return (
        <select 
            className={styles.menu}
            value={selected}
            onChange={e => setSelected(e.target.value)}
        >
            {/* map through list */}
            {list.map((item: ListItem) => {
                return (
                    <option
                        value={item.name}
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