import { apiData } from "./apiData";
import { ListItem } from "../../types/ListItem";
import { CountryFormData } from "../../types/CountryFormData";

const countriesApi = apiData.injectEndpoints({
    endpoints: (builder) => ({
        // Get all countries
        getAllCountries: builder.query<ListItem[], void>({
            query: () => "/Countries",
            providesTags: (result = []) =>
                result
                    ? [...result.map(({id}) => ({type: "Countries" as const, id})), "Countries"]
                    : ["Countries"]
        }),
        // Add new country
        addNewCountry: builder.mutation<ListItem, CountryFormData>({
            query: (newCountry) => ({
                url: "/Countries",
                method: "POST",
                body: newCountry,
            })
        })
    })
})

export const { useGetAllCountriesQuery } = countriesApi;