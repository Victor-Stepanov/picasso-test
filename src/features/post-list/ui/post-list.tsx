import React from "react";
import { IPost } from "@/shared/types";
import { PostItem } from "../../../entities/post-item/post-item";

interface Props {
  posts: IPost[];
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <ol key={post.id}>
              <PostItem post={post} />
            </ol>
          );
        })}
      </ul>
    </div>
  );
};
