import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import React, { useState, useEffect, useRef } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor } from "@wangeditor/editor";
import Content from "../Content";
import { toolbarConfig, editorConfig } from "./config";
import styles from "./index.less";

interface IProps {
  getHtmlCode: Function;
}

const WangEditor: React.FC<IProps> = ({ getHtmlCode }) => {
  const [editor, setEditor] = useState<IDomEditor | null>(null); // 存储 editor 实例
  const [html, setHtml] = useState<string>(""); // 编辑器内容

  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  const onEditValueChange = (value: {
    getText: () => React.SetStateAction<string>;
    getHtml: () => React.SetStateAction<string>;
  }) => {
    getHtmlCode(value.getText());
    setHtml(value.getHtml());
  };

  const scrollRef: any = useRef(null);

  const onScrollFrame = (values: any) => {
    console.log(values, "values>>>>>Editor");
  };

  return (
    <div className={styles.container}>
      <Toolbar
        editor={editor}
        defaultConfig={toolbarConfig}
        mode="default"
        style={{ borderBottom: "1px solid #ddd" }}
      />
      <Content
        height="100%"
        needPadding={false}
        contentPadding="10px 0"
        scrollRef={scrollRef}
        onScrollFrame={onScrollFrame}
      >
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(value) => onEditValueChange(value)}
          mode="default"
        />
      </Content>
    </div>
  );
};

export default WangEditor;
