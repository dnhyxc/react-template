import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 设置高亮样式
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
// 设置高亮的语言
import {
  jsx,
  javascript,
  sass,
  less,
} from "react-syntax-highlighter/dist/esm/languages/prism";

interface IProps {
  language?: string;
  value: string;
}

const CodeBlock: React.FC<IProps> = ({ language = null, value }) => {
  useEffect(() => {
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
    SyntaxHighlighter.registerLanguage("sass", sass);
    SyntaxHighlighter.registerLanguage("less", less);
  }, []);

  return (
    <figure className="highlight">
      <SyntaxHighlighter language={language} style={coy}>
        {value}
      </SyntaxHighlighter>
    </figure>
  );
};

export default CodeBlock;
