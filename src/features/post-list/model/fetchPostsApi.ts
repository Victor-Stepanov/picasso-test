import { api } from "@/shared/api";
import { IPost } from "@/shared/types";

const fetchPostsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], number>({
      query: (page = 1) => ({
        url: `/posts?_limit=10&_page=${page}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = fetchPostsApi;
