/**
 * @ts-ignore # 忽视本行代码的小错误
 * @ts-nocheck # 忽略全文
 * @ts-check # 取消忽略全文
 */

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  a11yDark, // 还行
  atomDark, // 还行
  coldarkCold,
  coldarkDark,
  coy,
  coyWithoutShadows,
  darcula,
  dracula,
  duotoneDark,
  duotoneEarth,
  duotoneForest,
  duotoneLight,
  duotoneSea,
  duotoneSpace,
  funky,
  ghcolors,
  gruvboxDark,
  gruvboxLight,
  holiTheme,
  hopscotch,
  materialDark,
  materialLight,
  materialOceanic,
  nightOwl, // 不错
  okaidia, // 常规还行
  oneDark, // 不错
  oneLight, // 不错
  vsDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./index.less";

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://www.npmjs.com/package/react-markdown.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdownJS = `Here is some JavaScript code:

### test

1. hahahahaahahahah

~~~js
const Mackdown = () => {
  return (
    <div className={styles.container}>
      {/* <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
        This ~is not~ strikethrough, but ~~this is~~!
      </ReactMarkdown> */}
      <ReactMarkdown
        children={markdownJS}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(=w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/pp$/, "")}
                style={light}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};
~~~
`;

const Mackdown = () => {
  return (
    <div className={styles.container}>
      {/* <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
        This ~is not~ strikethrough, but ~~this is~~!
      </ReactMarkdown> */}
      <ReactMarkdown
        children={markdownJS}
        remarkPlugins={[[remarkGfm]]}
        // remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        components={{
          // eslint-disable-next-line react/no-unstable-nested-components
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={coldarkCold}
                language={match[1]}
                PreTag="div"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...props}
              />
            ) : (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default Mackdown;
