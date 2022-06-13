/*
 * @Description: 头部组件
 * @Author: dnh
 * @Date: 2022-06-13 09:41:39
 * @LastEditors: dnh
 * @FilePath: \src\components\Header\index.tsx
 */
import React, { ReactNode } from "react";
import styles from "./index.less";

interface IProps {
  children?: ReactNode;
}

const Header: React.FC<IProps> = ({ children }) => {
  return <div className={styles.herderWrap}>{children}</div>;
};

export default Header;
