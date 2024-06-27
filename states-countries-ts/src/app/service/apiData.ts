import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ListItem } from "../../types/ListItem";

export const countriesApi = createApi({
    reducerPath: "countries",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5257/api"}),
    tagTypes: ["Countries", "States"],
    endpoints: (builder) => ({
        // Get all countries
        getAllCountries: builder.query<ListItem[], void>({
            query: () => "/Countries",
            providesTags: (result = []) => 
                result
                    ? [ ...result.map(({id}) => ({type: "Countries" as const, id})), "Countries"]
                    : ["Countries"]
        })
    })
})

export const { useGetAllCountriesQuery } = countriesApi;