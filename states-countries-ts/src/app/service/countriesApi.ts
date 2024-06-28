import { apiData } from "./apiData";
import { ListItem } from "../../types/ListItem";

const countriesApi = apiData.injectEndpoints({
    endpoints: (builder) => ({
        // Get all countries
        getAllCountries: builder.query<ListItem[], void>({
            query: () => "/Countries",
            providesTags: (result = []) =>
                result
                    ? [...result.map(({id}) => ({type: "Countries" as const, id})), "Countries"]
                    : ["Countries"]
        })
    })
})

export const { useGetAllCountriesQuery } = countriesApi;