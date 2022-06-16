import React, { ReactNode } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import styles from "./index.less";

interface IProps {
  children?: ReactNode;
}

const Content: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <Scrollbars autoHide>{children}</Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default Content;
