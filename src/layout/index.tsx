import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import MenuList from "@/components/MenuList";
import Header from "@/components/Header";

import styles from "./index.less";

const { Content } = Layout;

const AppLayout = () => {
  return (
    <div className={styles.container}>
      <MenuList />
      <Layout className={styles.layout}>
        <Content>
          <Header />
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
};

export default AppLayout;
