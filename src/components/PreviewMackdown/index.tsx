/**
 * @ts-ignore # 忽视本行代码的小错误
 * @ts-nocheck # 忽略全文
 * @ts-check # 取消忽略全文
 */
import React from "react";
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
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { observer } from "mobx-react";
import useStore from "@/store";

import "katex/dist/katex.min.css";

import styles from "./index.less";

interface IProps {
  mackdown: string;
}

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://www.npmjs.com/package/react-markdown

> 测试》》》》》

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdownJS = `Here is some JavaScript code:

# test H1
## test H2
### test H3
#### test H4
##### test H5
###### test H6

1. hahahahaahahahah

2. daskdjkasjdkalsjdkal jkasjkdlajs

3. dsakjdk asjkldjaks jdaksjda jda jdas djaj dasjd kas
4. sdakjdka sjkdljasklj dkalsjdklaj kldajsj daskljdakl sjdklasjdk; as

> 哈哈哈好了

- 你这个好没好

`;

const input = `<div class="note">

Some *emphasis* and <strong>strong</strong>!

</div>`;

const Mackdown: React.FC<IProps> = ({ mackdown }) => {
  const { create } = useStore();

  return (
    <div className={styles.container}>
      <ReactMarkdown
        children={mackdown}
        // children={`The lift coefficient ${markdownJS} is a dimensionless coefficient.`} // remarkMath 及 rehypeKatex 插件的作用
        remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={coldarkCold}
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
          // h1: "h2",
          blockquote: ({ node, ...props }) => (
            <blockquote className={styles.blockquote} {...props} />
          ),
        }}
      />
    </div>
  );
};

export default observer(Mackdown);
