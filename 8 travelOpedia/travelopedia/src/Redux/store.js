import { configureStore } from "@reduxjs/toolkit";
import { destinationAPI } from "../api/DestinationAPI";
import { randomDestinationApi } from "../api/RandomDestinationAPI";

export const store = configureStore({
  reducer: {
    [destinationAPI.reducerPath]: destinationAPI.reducer,
    [randomDestinationApi.reducerPath]: randomDestinationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(destinationAPI.middleware)
      .concat(randomDestinationApi.middleware),
});
