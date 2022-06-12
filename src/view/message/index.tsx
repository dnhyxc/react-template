import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Message: React.FC = () => {
  // 接受 state 传参
  const navigate = useNavigate();

  const location = useLocation();

  const { from } = location.state as any;

  const onClickMessage = (index: number) => {
    navigate(`/home/detail?id=${index}`);
  };

  return (
    <div>
      {[0, 1, 2].map((i) => {
        return (
          <p key={i} onClick={() => onClickMessage(i)}>
            {from} click message to detail
          </p>
        );
      })}
    </div>
  );
};

export default Message;
