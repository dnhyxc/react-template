/*
 * @Description: 路由组件
 * @Author: dnh
 * @Date: 2022-06-13 09:41:39
 * @LastEditors: dnh
 * @FilePath: \src\router\index.tsx
 */
import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import routeConfig from "./config";

const RouterConfig = () => {
  return useRoutes(routeConfig);
};

interface IProps {
  children?: any;
}

const App: React.FC<IProps> = () => {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
};

export default App;
