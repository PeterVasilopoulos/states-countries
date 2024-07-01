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
                    ? [...result.map(({id}) => ({type: "Country" as const, id})), "Country"]
                    : ["Country"]
        }),
        // Add new country
        addCountry: builder.mutation<ListItem, CountryFormData>({
            query: (newCountry) => ({
                url: "/Countries",
                method: "POST",
                body: newCountry,
            }),
            invalidatesTags: ["Country"]
        }),
        // Edit a country
        editCountry: builder.mutation<ListItem, ListItem>({
            query: (editedCountry) => ({
                url: `/Countries/${editedCountry.id}`,
                method: "PUT",
                body: editedCountry,
            }),
            invalidatesTags: (_result, _error, arg) => [{type: "Country", id: arg.id}]
        })
    })
})

export const {
    useGetAllCountriesQuery, 
    useAddCountryMutation,
    useEditCountryMutation,
} = countriesApi;