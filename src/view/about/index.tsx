/*
 * @Description: About 页面
 * @Author: dnh
 * @Date: 2022-06-13 09:41:39
 * @LastEditors: dnh
 * @FilePath: \src\view\about\index.tsx
 */
import { useEffect } from "react";
import { Button } from "antd";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import styles from "./index.less";

const About = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/about") {
      navigate("message", {
        state: {
          from: "state 传参 => 我从 message 来",
        },
      });
    }
  }, [pathname]);

  const toMessage = () => {
    navigate("message", {
      state: {
        from: "state 传参 => 我从 message 来",
      },
      replace: false, // 默认 replace 是 false
    });
  };

  const toNews = () => {
    navigate("news?from=news");
  };

  return (
    <div className={styles.container}>
      <Header>About</Header>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <Button className={styles.btn} onClick={toMessage}>
            click show message
          </Button>
          <Button className={styles.btn} onClick={toNews}>
            click show news
          </Button>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default About;
