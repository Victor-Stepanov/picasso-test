import { api } from "@/shared/api";
import { IPost } from "@/shared/types";

const fetchPostByIdApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPostById: builder.query<IPost, string>({
      query: (id) => ({
        url: `posts/${id}`,
      }),
    }),
  }),
});

export const { useGetPostByIdQuery } = fetchPostByIdApi;
