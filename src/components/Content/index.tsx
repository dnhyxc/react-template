import React, { ReactNode } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import styles from "./index.less";

interface IProps {
  children?: ReactNode;
  height?: string;
  needScroll?: boolean;
  needPadding?: boolean;
  autoHide?: boolean;
}

const Content: React.FC<IProps> = ({
  children,
  height,
  needScroll = true,
  needPadding = true,
  autoHide = true,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.wrap}
        style={{ height, padding: !needPadding ? 0 : "6px" }}
      >
        <div className={styles.content}>
          {needScroll ? (
            <Scrollbars autoHide={autoHide} className={styles.scroll}>
              {children}
            </Scrollbars>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
