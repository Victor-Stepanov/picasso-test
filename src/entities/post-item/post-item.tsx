import { IPost } from "@/shared/types";
import React from "react";

import { Link } from "react-router-dom";
import { PostBody } from "../post-body";

interface Props {
  post: IPost;
}

export const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <PostBody title={post.title} body={post.body} />
      <Link to={`${post.id}`}>Показать</Link>
    </div>
  );
};
