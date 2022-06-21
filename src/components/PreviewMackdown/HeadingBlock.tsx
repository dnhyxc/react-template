import React from "react";
import Heading from "./Heading";

interface IProps {
  level: string;
  children: any;
}

const HeadingBlock: React.FC<IProps> = ({ level, children }) => {
  const renderHtml = () => {
    if (children && children.length > 0) {
      const nodeValue = children[0].props.value;

      return (
        <Heading level={`h${level}`} id={nodeValue}>
          <span className="title">{children}</span>
          <a href={`#${nodeValue}`} className="link">
            #
          </a>
        </Heading>
      );
    }
    return <>{children}</>;
  };
  return <div>{renderHtml()}</div>;
};

export default HeadingBlock;
