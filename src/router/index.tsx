import React, { Suspense } from "react";
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
      <Suspense fallback={null}>
        <RouterConfig />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
