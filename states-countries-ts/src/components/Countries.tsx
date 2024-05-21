interface CountriesProps {
    children?: any;
    selectedCountry: string;
}

function Countries({children, selectedCountry}: CountriesProps) {
    return (
        <div>
            <p>Country Selected: {selectedCountry}</p>
            {children}
        </div>
    )
}

export default Countries