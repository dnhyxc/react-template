import React, { useState } from "react";
import { Button } from "antd";
import WangEditor from "@/components/WangEditor";
import Content from "@/components/Content";
import Header from "@/components/Header";
import CreateModel from "./CreateModel";
import styles from "./index.less";

const CreateContent: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  const getHtmlCode = (html: string) => {
    setHtmlCode(html);
  };

  const onCreate = () => {
    setVisible(true);
  };

  const onHideModel = () => {
    setVisible(false);
  };

  const headerRight = () => {
    return (
      <div className={styles.left}>
        <Button type="primary" onClick={onCreate}>
          新建
        </Button>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Header right={headerRight()}>Create</Header>
      <Content needScroll={false}>
        <WangEditor getHtmlCode={getHtmlCode} />
      </Content>
      <CreateModel
        visible={visible}
        onCancel={onHideModel}
        htmlCode={htmlCode}
      />
    </div>
  );
};

export default CreateContent;
