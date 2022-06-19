import React, { useState } from "react";
import { Modal, Input, TimePicker } from "antd";
import type { Moment } from "moment";

interface IProps {
  visible: boolean;
  onCancel: Function;
}

const CreateModel: React.FC<IProps> = ({ visible, onCancel }) => {
  const [time, setTime] = useState<Moment | null>(null);

  const onChangeTime = (date: Moment | null) => {
    setTime(date);
  };

  const onSubmit = () => {
    onCancel();
  };

  return (
    <Modal
      title="新建文档"
      visible={visible}
      onOk={onSubmit}
      okText="创建"
      cancelText="取消"
      onCancel={() => onCancel()}
    >
      <div>
        <div>
          <span>文章标题</span>
          <Input />
        </div>
        <div>
          <span>创建时间</span>
          <TimePicker value={time} onChange={onChangeTime} />
        </div>
      </div>
    </Modal>
  );
};

export default CreateModel;
