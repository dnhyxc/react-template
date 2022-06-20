import React from "react";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Mackdown from "@/components/Mackdown";

const CreateMackdown: React.FC = () => {
  return (
    <div>
      <Header>create mackdown</Header>
      <Content>
        <Mackdown />
      </Content>
    </div>
  );
};

export default CreateMackdown;
