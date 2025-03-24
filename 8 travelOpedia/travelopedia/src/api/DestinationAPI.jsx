import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AddDestination from "../components/AddDestination";

export const destinationAPI = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Destination"],
  endpoints: (builder) => ({
    getAllDestinations: builder.query({
      query: () => ({
        url: "destinations",
        method: "GET",
        params: {},
      }),
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
      providesTags: ["Destination"],
    }),

    AddDestination: builder.mutation({
      query: (destination) => ({
        url: "destinations",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: ["Destination"],
    }),

    updateDestination: builder.mutation({
      query: (destination) => ({
        url: `destinations/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
      invalidatesTags: ["Destination"],
    }),

    deleteDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destinations/${id}`,
        method: "DELETE",
        //body: id,
      }),
      invalidatesTags: ["Destination"],
    }),
  }),
});

export const {
  useGetAllDestinationsQuery,
  useAddDestinationMutation,
  useUpdateDestinationMutation,
  useDeleteDestinationMutation,
} = destinationAPI;
