import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
    reducer: combineReducers({
        [authApi.reducerPath]: authApi.reducer,
    }),
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
