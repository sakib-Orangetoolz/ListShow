import { api } from '../../core/rtk/api';

const submission = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({

    getPosts: build.query({
      query: () => 'posts?_page=1&_limit=10',
    }),

  
    getPostsByPage: build.query({
      query: ({ page = 2, limit = 10 }) => {
        return `posts?_page=${page}&_limit=${limit}`;
      },
      async onQueryStarted(queryArgument, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            submission.util.updateQueryData('getPosts', null, (draft) => {
              if (data && draft && queryArgument.page > 1) {
                draft.push(...data);
              }
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useLazyGetPostsByPageQuery,
} = submission;