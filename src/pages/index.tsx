import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom'

import { HomePage } from './home'
import { Layout } from './layout'
import { PostPage } from './post'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/post/:postId', element: <PostPage /> },
    ],
  },
  { path: '*', element: <Navigate to='/' /> },
]

export const router = createBrowserRouter(routes)
