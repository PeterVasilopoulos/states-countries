import { configureStore } from "@reduxjs/toolkit";
import changeReducer from '../features/changeSlice';
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiData } from "./service/apiData";

export const store = configureStore({
    reducer: {
        change: changeReducer,
        [apiData.reducerPath]: apiData.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiData.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;