import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
    reducerPath: "countries",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5257"}),
    endpoints: (builder) => ({
        // Get all countries
        getAllCountries: builder.query({
            query: () => "/Countries",
        })
    })
})

export const { useGetAllCountriesQuery } = countriesApi;