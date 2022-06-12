import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const About = () => {
  const navative = useNavigate();

  const toDetail = (id: number) => {
    navative(`detail/${id}`);
  };

  return (
    <div>
      {[100, 111, 222, 333].map((i) => (
        <Button key={i} onClick={() => toDetail(i)}>
          {i} click to detail
        </Button>
      ))}
    </div>
  );
};

export default About;
