import { useGetPostsQuery } from "../../model/fetchPostsApi";
import React from "react";
import { PostList } from "../post-list";
import { Loader } from "@/shared/ui/loader";

export const PostListContainer = () => {
  const [page, setPage] = React.useState(1);
  const { data: posts, isLoading } = useGetPostsQuery(page);

  if (isLoading) {
    return <Loader />;
  }

  if (!posts) {
    return null;
  }

  return (
    <PostList onPageChange={() => setPage((prev) => prev + 1)} posts={posts} />
  );
};
