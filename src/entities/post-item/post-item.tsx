import { IPost } from "@/shared/types";
import React from "react";
import styles from "./styles.module.css";

import { Link } from "react-router-dom";
import { PostBody } from "../post-body";

interface Props {
  post: IPost;
}

export const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <div className={styles.root}>
      <span>{post.id}</span>
      <PostBody title={post.title} body={post.body} />
      <Link to={`${post.id}`}>Показать</Link>
    </div>
  );
};
