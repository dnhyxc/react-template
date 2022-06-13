/*
 * @Description: 详情页
 * @Author: dnh
 * @Date: 2022-06-13 09:41:39
 * @LastEditors: dnh
 * @FilePath: \src\view\detail\index.tsx
 */
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import styles from "./index.less";

const Detail = () => {
  // 接收query传参
  const [search] = useSearchParams();
  const id = search.get("id");
  const { id: paramsId } = useParams();

  const location = useLocation();

  const { from } = (location.state as any) || {};

  console.log(from, "form");

  return (
    <div className={styles.container}>
      <Header>Detail</Header>
      <div className={styles.wrap}>
        <div className={styles.content}>detailId - {id || paramsId}</div>
      </div>
    </div>
  );
};

export default Detail;
