import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../services/base-query";
import CreateRequestDetail from "./interfaces/create-request-detail";
import RequestDetail from "./interfaces/request-detail";
import UpdateRequestDetail from "./interfaces/update-request-detail";

export const requestDetailsApi = createApi({
  reducerPath: "requestDetailsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_HOST}:${
      import.meta.env.VITE_BACKEND_PORT
    }/api/v1`,
  }),
  tagTypes: ["RequestDetails"],
  endpoints: (build) => {
    return {
      getAllRequestDetails: build.query<RequestDetail[], void>({
        query: () => ({ url: "/request-details/", method: "GET" }),
        providesTags: (result) =>
          result
            ? // successful query
              [
                ...result.map(
                  ({ id }) => ({ type: "RequestDetails", id } as const)
                ),
                { type: "RequestDetails", id: "LIST" },
              ]
            : // an error occurred, refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
              [{ type: "RequestDetails", id: "LIST" }],
      }),
      getRequestDetail: build.query<RequestDetail, string>({
        query: (id) => ({
          url: `/request-details/${id}/`,
          method: "GET",
        }),
        providesTags: (_result, _error, id) => [{ type: "RequestDetails", id }],
      }),
      createRequestDetail: build.mutation<RequestDetail, CreateRequestDetail>({
        query: (newRequestDetail) => {
          return {
            url: "/request-details/",
            method: "POST",
            data: newRequestDetail,
          };
        },
        invalidatesTags: [{ type: "RequestDetails", id: "LIST" }],
      }),
      updateRequestDetail: build.mutation<RequestDetail, UpdateRequestDetail>({
        query: ({ id, data }) => ({
          url: `/request-details/${id}/`,
          method: "PUT",
          data: data,
        }),
        invalidatesTags: (_result, _error, { id }) => [
          { type: "RequestDetails", id },
        ],
      }),
      deleteRequestDetail: build.mutation<
        { success: boolean; id: string },
        number
      >({
        query: (id) => ({ url: `/request-details/${id}`, method: "DELETE" }),
        invalidatesTags: (_result, _error, id) => [
          { type: "RequestDetails", id },
        ],
      }),
    };
  },
});

export const {
  useGetAllRequestDetailsQuery,
  useGetRequestDetailQuery,
  useCreateRequestDetailMutation,
  useUpdateRequestDetailMutation,
  useDeleteRequestDetailMutation,
} = requestDetailsApi;
