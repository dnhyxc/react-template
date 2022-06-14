/*
 * @Description: 详情页
 * @Author: dnh
 * @Date: 2022-06-13 09:41:39
 * @LastEditors: dnh
 * @FilePath: \src\view\detail\index.tsx
 */
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { observer } from "mobx-react";
import { Button, Checkbox } from "antd";
import Header from "@/components/Header";

import useStore from "@/store";

import styles from "./index.less";

const Detail = () => {
  const [checkList, setCheckList] = useState<number[]>([]);
  // 接收query传参
  const [search] = useSearchParams();
  const id = search.get("id");
  const { id: paramsId } = useParams();

  const { add, detail } = useStore();

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

  const onInitList = () => {
    setCheckList([]);
    detail.initList();
  };

  const addItem = () => {
    detail.addItem();
  };

  const deleteItem = (index: number) => {
    const filterList = checkList.filter((i) => i !== index);
    setCheckList(filterList);
    detail.deleteItem(index);
  };

  const onDeleteAllChecked = () => {
    setCheckList([]);
    detail.deleteAllChecked(checkList);
  };

  const onSelect = (value: any) => {
    const checked = checkList.some((i) => i === value);
    if (checked) {
      const filterList = checkList.filter((i) => i !== value);
      setCheckList(filterList);
    } else {
      checkList.push(value);
      setCheckList([...checkList]);
    }
  };

  const onSelectAll = () => {
    const ids = detail.list.map((i) => i.id);
    if (ids.length === checkList.length) {
      setCheckList([]);
    } else {
      setCheckList(ids);
    }
  };

  return (
    <div className={styles.container}>
      <Header>Detail</Header>
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div>详情ID为：{id || paramsId}</div>
          <div className={styles.countAction}>
            <h1>{add.count}</h1>
            <div className={styles.list}>
              <div className={styles.checkAll}>
                <Checkbox
                  className={styles.checkbox}
                  checked={
                    detail.list.length === checkList.length &&
                    checkList.length > 0
                  }
                  onChange={onSelectAll}
                />
                <span>全选</span>
              </div>
              {detail.list.map((i) => {
                return (
                  <div key={i.id} className={styles.item}>
                    <div className={styles.info}>
                      <Checkbox
                        className={styles.checkbox}
                        checked={checkList.includes(i.id)}
                        onChange={() => onSelect(i.id)}
                      />
                      <span>name: {i.name}</span> - <span>age: {i.age}</span>
                    </div>
                    <Button type="link" onClick={() => deleteItem(i.id)}>
                      删除
                    </Button>
                  </div>
                );
              })}
            </div>
            <div className={styles.actions}>
              <Button className={styles.action} onClick={onIncrement}>
                点我加
              </Button>
              <Button className={styles.action} onClick={onIncrementAsync}>
                异步加
              </Button>
              <Button className={styles.action} onClick={onDecrement}>
                点我减
              </Button>
              <Button className={styles.action} onClick={onReset}>
                重置
              </Button>
              <Button
                type="primary"
                className={styles.action}
                onClick={addItem}
              >
                增加item
              </Button>
              <Button
                type="primary"
                className={styles.action}
                onClick={onInitList}
              >
                重新获取List
              </Button>
              <Button
                type="primary"
                className={styles.action}
                onClick={onDeleteAllChecked}
                disabled={checkList.length === 0}
              >
                批量删除
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Detail);
