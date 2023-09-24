import React from "react";
import { IPost } from "@/shared/types";
import { PostItem } from "../../../entities/post-item/post-item";
import { Virtuoso } from "react-virtuoso";

interface Props {
  posts: IPost[];
  onPageChange: () => void;
}

export const PostList: React.FC<Props> = ({ posts, onPageChange }) => {
  return (
    <Virtuoso
      style={{
        height: "700px",
        width: "100%",
      }}
      totalCount={posts.length}
      itemContent={(index: number) => {
        return <PostItem key={posts[index].id} post={posts[index]} />;
      }}
      endReached={onPageChange}
    />
  );
};
