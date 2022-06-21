import React from "react";
import { observer } from "mobx-react";
import useStore from "@/store";
import Header from "@/components/Header";
import Content from "@/components/Content";
import PreviewMackdown from "@/components/PreviewMackdown";

const CreateMackdown: React.FC = () => {
  const { create } = useStore();
  return (
    <div>
      <Header>create mackdown</Header>
      <Content>
        <PreviewMackdown mackdown={create.mackdown} />
      </Content>
    </div>
  );
};

export default CreateMackdown;
