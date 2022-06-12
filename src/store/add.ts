/*
 * @Description: AddMobx
 * @Author: dnh
 * @Date: 2022-06-10 14:40:48
 * @LastEditors: dnh
 * @FilePath: \example\react\mobx\src\store\add.ts
 * @LastEditTime: 2022-06-10 14:44:45
 */
import { makeAutoObservable } from "mobx";

class AddMobx {
  constructor() {
    makeAutoObservable(this);
  }

  count = 0;

  minusHandle() {
    this.count--;
  }

  addHandle() {
    this.count++;
  }
}

export default AddMobx;
