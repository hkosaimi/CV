import { apiSlice } from "./apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/api/users/auth",
        method: "POST",
        body: data,
      }),
    }),
    getUsers: builder.query({
      query: ({ pageNumber }) => ({
        url: "/api/users",
        params: {
          pageNumber,
        },
      }),
    }),
    getUserDetails: builder.query({
      query: (userId) => ({
        url: `/api/users/${userId}`,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/api/users/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginUserMutation, useGetUsersQuery, useGetUserDetailsQuery, useLogoutMutation } =
  userApi;
