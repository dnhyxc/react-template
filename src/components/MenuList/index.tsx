import React from "react";
import { useNavigate } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import styles from "./index.less";

const { Sider } = Layout;

const MenuList: React.FC = () => {
  const navigate = useNavigate();

  const onSelectMenu = (value: { key: string }) => {
    navigate(value.key);
  };

  return (
    <Sider theme="light" trigger={null} collapsible>
      <div className={styles.logo}>React Template</div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["home"]}
        items={[
          {
            key: "home",
            icon: <PieChartOutlined />,
            label: "home",
          },
          {
            key: "about",
            icon: <DesktopOutlined />,
            label: "about",
          },
        ]}
        onClick={(e) => onSelectMenu(e)}
      />
    </Sider>
  );
};

export default MenuList;
