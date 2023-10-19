import { IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const REVIEW_API = "/review";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //user create
    getAllReview: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: REVIEW_API,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: any, meta: IMeta) => {
        return {
          review: response,
          meta,
        };
      },
      providesTags: [tagTypes.review],
    }),

    review: build.mutation({
      query: (data) => ({
        url: REVIEW_API,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const { useGetAllReviewQuery, useReviewMutation } = reviewApi;
