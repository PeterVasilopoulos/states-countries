import { apiData } from "./apiData";
import { ListItem } from "../../types/ListItem";
import { StateFormData } from "../../types/StateFormData";

const statesApi = apiData.injectEndpoints({
    endpoints: (builder) => ({
        // Get states with countryCode
        getStatesFromCountryCode: builder.query<ListItem[], string>({
            query: (countryCode) => `/States/Country/${countryCode}`,
            providesTags: (result = []) =>
                result
                    ? [...result.map(({id}) => ({type: "State" as const, id})), "State"]
                    : ["State"]
        }),
        // Get all states
        getAllStates: builder.query<ListItem[], void>({
            query: () => "/States",
            providesTags: (result = []) =>
                result
                    ? [...result.map(({id}) => ({type: "State" as const, id})), "State"]
                    : ["State"]
        }),
        // Get one state
        getOneState: builder.query<ListItem, number>({
            query: (id) => `/States/${id}`
        }),
        // Add new state
        addState: builder.mutation<ListItem, StateFormData>({
            query: (newState) => ({
                url: "/States",
                method: "POST",
                body: newState,
            }),
            invalidatesTags: ["State"]
        }),
    })
})

export const {
    useGetStatesFromCountryCodeQuery,
    useGetAllStatesQuery,
    useGetOneStateQuery,
    useAddStateMutation,
} = statesApi;