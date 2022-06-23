import React from "react";
import Header from "@/components/Header";
import Content from "@/components/Content";
import TuiEditor from "@/components/TuiEditor";

import styles from "./index.less";

interface IProps {}

const CreateArticle: React.FC<IProps> = () => {
  return (
    <div className={styles.container}>
      <Header>Create Article</Header>
      <Content needScroll={false}>
        <TuiEditor />
      </Content>
    </div>
  );
};

export default CreateArticle;
