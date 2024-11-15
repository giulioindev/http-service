import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { requestDetailsApi } from "../request-details/request-detail.service";

const rootReducer = combineReducers({
  // Add the generated api reducer as a specific top-level slice
  [requestDetailsApi.reducerPath]: requestDetailsApi.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(requestDetailsApi.middleware),
    // The initial state
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
