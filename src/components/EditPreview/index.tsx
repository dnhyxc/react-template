import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import React, { useState, useEffect } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor } from "@wangeditor/editor";
import { Scrollbars } from "react-custom-scrollbars";
import { toolbarConfig, editorConfig } from "./config";
import Preview from "../Preview";
import styles from "./index.less";

interface IProps {}

const EditPreview: React.FC<IProps> = () => {
  const [editor, setEditor] = useState<IDomEditor | null>(null); // 存储 editor 实例
  const [html, setHtml] = useState<string>(""); // 编辑器内容
  const [text, setText] = useState<string>(""); // 编辑器内容

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
    setHtml(value.getHtml());
    setText(value.getText());
  };

  return (
    <div className={styles.container}>
      <Toolbar
        editor={editor}
        defaultConfig={toolbarConfig}
        mode="default"
        style={{ borderBottom: "1px solid #ddd" }}
      />
      <div className={styles.content}>
        <div className={styles.edit}>
          <Scrollbars>
            <Editor
              defaultConfig={editorConfig}
              value={html}
              onCreated={setEditor}
              onChange={(value) => onEditValueChange(value)}
              mode="default"
            />
          </Scrollbars>
        </div>
        <div className={styles.preview}>
          <Scrollbars>
            <div className={styles.previewScroll}>
              <Preview mackdown={text} />
            </div>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default EditPreview;
