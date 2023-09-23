import { IPost } from "@/shared/types";
import React from "react";

interface Props extends Omit<IPost, "id" | "userId"> {}

export const PostBody: React.FC<Props> = ({ title, body }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};
