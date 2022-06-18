import React, { useState } from "react";
import WangEditor from "@/components/WangEditor";
import Content from "@/components/Content";
import Header from "@/components/Header";
import styles from "./index.less";

const CreateContent: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState<string>("");

  const getHtmlCode = (html: string) => {
    setHtmlCode(html);
  };

  console.log(htmlCode, "htmlCode");

  return (
    <div className={styles.container}>
      <Header>Create</Header>
      <Content>
        <WangEditor getHtmlCode={getHtmlCode} />
      </Content>
    </div>
  );
};
export default CreateContent;
