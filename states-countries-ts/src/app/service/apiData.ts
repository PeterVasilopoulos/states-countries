import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ListItem } from "../../types/ListItem";

export const countriesApi = createApi({
    reducerPath: "countries",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5257/api"}),
    endpoints: (builder) => ({
        // Get all countries
        getAllCountries: builder.query<ListItem[], void>({
            query: () => "/Countries",
        })
    })
})

export const { useGetAllCountriesQuery } = countriesApi;