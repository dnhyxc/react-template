import { useRoutes } from "react-router-dom";
import routeConfig from "./config";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

const RouterConfig = () => {
  return useRoutes(routeConfig);
};

interface IProps {
  children?: any;
}

const App: React.FC<IProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <RouterConfig />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
