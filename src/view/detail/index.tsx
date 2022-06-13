/*
 * @Description: 详情页
 * @Author: dnh
 * @Date: 2022-06-13 09:41:39
 * @LastEditors: dnh
 * @FilePath: \src\view\detail\index.tsx
 */
import { useParams, useSearchParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Button } from "antd";
import Header from "@/components/Header";

import useStore from "@/store";

import styles from "./index.less";

const Detail = () => {
  // 接收query传参
  const [search] = useSearchParams();
  const id = search.get("id");
  const { id: paramsId } = useParams();

  const { add } = useStore();

  const onIncrement = () => {
    add.increment();
  };

  const onIncrementAsync = () => {
    add.incrementAsync();
  };

  const onDecrement = () => {
    add.decrement();
  };

  const onReset = () => {
    add.reset();
  };

  return (
    <div className={styles.container}>
      <Header>Detail</Header>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div>detailId - {id || paramsId}</div>
          <div className={styles.countAction}>
            <h1>{add.count}</h1>
            <div className={styles.actions}>
              <Button onClick={onIncrement}>点我加</Button>
              <Button onClick={onIncrementAsync}>异步加</Button>
              <Button onClick={onDecrement}>点我减</Button>
              <Button onClick={onReset}>重置</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Detail);
