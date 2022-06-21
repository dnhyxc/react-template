/* eslint-disable react/destructuring-assignment */
// @ts-nocheck
import "braft-editor/dist/index.css";
import React, { useState } from "react";
import BraftEditor from "braft-editor";
import { observer } from "mobx-react";
import useStore from "@/store";

const EditorDemo = () => {
  const [editorState, setEditorState] = useState();

  const { create } = useStore();

  const submitContent = () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = editorState.toText();

    console.log(htmlContent, "this.state.editorState");
  };

  // eslint-disable-next-line no-shadow
  const handleEditorChange = (editorState) => {
    console.log(editorState, "editorState");
    create.createMackdown(editorState.toText());
    setEditorState(editorState);
  };

  return (
    <div className="my-component">
      <BraftEditor
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
    </div>
  );
};

export default observer(EditorDemo);
