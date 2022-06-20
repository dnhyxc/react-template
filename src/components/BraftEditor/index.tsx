/* eslint-disable react/destructuring-assignment */
// @ts-nocheck
import React from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";

export default class EditorDemo extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    editorState: null,
  };

  async componentDidMount() {
    // const htmlContent = await fetchEditorContent();
    // this.setState({
    //   editorState: BraftEditor.createEditorState(htmlContent),
    // });
  }

  submitContent = async () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = this.state.editorState.toHTML();

    console.log(htmlContent, "htmlContent");
  };

  handleEditorChange = (editorState: any) => {
    console.log(editorState, "editorState");
    this.setState({ editorState });
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="my-component">
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        />
      </div>
    );
  }
}
