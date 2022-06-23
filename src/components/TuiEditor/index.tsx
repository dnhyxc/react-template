import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "highlight.js/styles/github.css";
import React, { useEffect } from "react";
import Editor from "@toast-ui/editor";

const TuiEditor: React.FC = () => {
  useEffect(() => {
    const instance = new Editor({
      el: document.querySelector("#editorSection")!,
      initialEditType: "markdown",
      previewStyle: "vertical",
      height: "300px",
    });

    instance.getHTML();
  }, []);

  return <div id="editorSection" />;
};

export default TuiEditor;
