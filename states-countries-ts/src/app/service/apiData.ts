import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiData = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5257/api"}),
    tagTypes: ["Country", "State"],
    endpoints: () => ({})
})