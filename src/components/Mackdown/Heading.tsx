import React from "react";

interface ElementProps {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
}

interface IProps {
  level: string;
  children?: Object;
  id?: string;
}

const elements: ElementProps = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const Heading: React.FC<IProps> = ({ level, children, ...props }) => {
  // @ts-ignore
  return React.createElement(elements[level] || elements.h1, props, !children);
};

export default Heading;
