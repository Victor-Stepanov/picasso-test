import { Virtuoso } from "react-virtuoso";
import { useGetPostsQuery } from "../../model/fetchPostsApi";
import React from "react";
import { PostItem } from "@/entities/post-item/post-item";

export const PostListContainer = () => {
  const [page, setPage] = React.useState(1);
  const { data: posts, isLoading } = useGetPostsQuery(page);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!posts) {
    return null;
  }

  return (
    <Virtuoso
      style={{ height: "500px" }}
      totalCount={posts.length}
      itemContent={(index: number) => {
        const post = posts[index];
        return (
          <div>
            <PostItem post={post} />
          </div>
        );
      }}
      endReached={() => setPage((prevPage) => prevPage + 1)}
    />
  );
};
