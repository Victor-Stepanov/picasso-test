import React from "react";
import { IPost } from "@/shared/types";
import { PostItem } from "../../../entities/post-item/post-item";
import { Virtuoso } from "react-virtuoso";

interface Props {
  posts: IPost[];
}

export const PostList: React.FC<Props> = ({ posts }) => {
  const itemContent = (index: number) => {
    const post = posts[index];
    return <PostItem post={post} />;
  };

  return (
    <Virtuoso
      style={{ height: "400px" }}
      totalCount={posts.length}
      itemContent={itemContent}
    />
  );
};
