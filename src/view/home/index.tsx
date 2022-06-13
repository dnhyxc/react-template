/*
 * @Description: 首页
 * @Author: dnh
 * @Date: 2022-06-13 09:41:39
 * @LastEditors: dnh
 * @FilePath: \src\view\home\index.tsx
 */
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import Header from "@/components/Header";
import styles from "./index.less";

const Home = () => {
  const navigate = useNavigate();

  const toDetail = (id: number) => {
    navigate(`detail/${id}`);
  };

  return (
    <div className={styles.container}>
      <Header>Home</Header>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div className={styles.list}>
            {[100, 111, 222, 333].map((i) => (
              <div className={styles.item} key={i}>
                detail - {i}
                <Button type="primary" onClick={() => toDetail(i)}>
                  click to detail
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
