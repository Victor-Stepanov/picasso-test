import { RouteObject, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./home";
import { Layout } from "./layout";
import { PostPage } from "./post";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ":postId", element: <PostPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
