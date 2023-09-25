import { api } from '@/shared/api'
import { IPost } from '@/shared/types'

const fetchPostsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], number>({
      query: (page = 1) => ({
        url: `/posts?_limit=10&_page=${page}`,
      }),
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
  }),
  overrideExisting: false,
})

export const { useGetPostsQuery } = fetchPostsApi
