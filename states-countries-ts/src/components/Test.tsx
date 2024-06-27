import { useGetAllCountriesQuery } from "../app/service/apiData";

function Test() {
    const {data, isLoading, isError} = useGetAllCountriesQuery();
    console.log(data);

    if(isLoading) {
        return <p>Loading...</p>
    }

    if(isError) {
        return <p>Error!</p>
    }

    return (
        <div>
            Working
        </div>
    )
}

export default Test;