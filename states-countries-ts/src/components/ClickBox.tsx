import { Children } from "react";

interface ClickBoxProps {
    children: string;
    setter: (name: string) => void;
}

function ClickBox({children, setter}: ClickBoxProps) {
    // handle click function
    function handleClick() {
        setter(children)
    }

    return (
        <span onClick={handleClick}>
            {children}
        </span>
    )
}

export default ClickBox