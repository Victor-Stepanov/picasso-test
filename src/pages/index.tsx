import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <span>HomePage</span>,
  },
];

export const router = createBrowserRouter(routes);
