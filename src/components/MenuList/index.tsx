/*
 * @Description: 菜单组件
 * @Author: dnh
 * @Date: 2022-06-13 09:41:39
 * @LastEditors: dnh
 * @FilePath: \src\components\MenuList\index.tsx
 */
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DesktopOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import styles from "./index.less";

const { Sider } = Layout;

const MenuList: React.FC = () => {
  const [selectMenu, setSelectMenu] = useState<string>("/");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setSelectMenu("/home");
      navigate("home");
    } else if (pathname === "/detail") {
      setSelectMenu("/detail");
    } else {
      const index = pathname.indexOf("/", 1);
      if (index > -1) {
        const path = pathname.slice(0, index);
        setSelectMenu(path);
      } else {
        setSelectMenu(pathname);
      }
    }
    return () => {
      // console.log(pathname, "后置路由守卫");
    };
  }, [pathname]);

  const onSelectMenu = (value: { key: string }) => {
    setSelectMenu(value.key);
    navigate(value.key);
  };

  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      className={styles.siderWrap}
    >
      <div className={styles.logo}>React Template</div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["home"]}
        selectedKeys={[selectMenu.slice(1)]}
        items={[
          {
            key: "home",
            icon: <HomeOutlined />,
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
