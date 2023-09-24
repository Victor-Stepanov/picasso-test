import { PostBody } from "@/entities/post-body";
import { IPost } from "@/shared/types";
import React from "react";

interface Props extends Omit<IPost, "userId"> {}

export const PostDetailsItem: React.FC<Props> = () => {
  return (
    <div>
      <PostBody />
    </div>
  );
};
