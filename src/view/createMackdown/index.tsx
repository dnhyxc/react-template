import React from "react";
import BraftEditor from "braft-editor";
import Content from "@/components/Content";
import Header from "@/components/Header";
import styles from "./index.less";

const CreateMackdown: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header>create mackdown</Header>
      <Content>
        <BraftEditor />
      </Content>
    </div>
  );
};

export default CreateMackdown;
