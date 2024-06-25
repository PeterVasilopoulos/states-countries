import { configureStore } from "@reduxjs/toolkit";
import changeReducer from '../features/changeSlice';
import { setupListeners } from "@reduxjs/toolkit/query";
import { countriesApi } from "./service/apiData";

export const store = configureStore({
    reducer: {
        change: changeReducer,
        [countriesApi.reducerPath]: countriesApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(countriesApi.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;