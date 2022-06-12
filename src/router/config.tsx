import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import Layout from "@/layout";

const Home = lazy(() => import("@/view/home"));
const Message = lazy(() => import("@/view/message"));
const About = lazy(() => import("@/view/about"));
const Detail = lazy(() => import("@/view/detail"));
const Login = lazy(() => import("@/view/login"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />, // 指定路由渲染容器
    children: [
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "message",
            element: <Message />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about/detail/:id",
        element: <Detail />,
      },
      {
        path: "/home/detail",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/" />, // 路由重定向
  },
];

export default routes;
