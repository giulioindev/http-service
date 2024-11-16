import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { requestDetailsApi } from "../request-details/request-detail.service";

const rootReducer = combineReducers({
  [requestDetailsApi.reducerPath]: requestDetailsApi.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(requestDetailsApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
