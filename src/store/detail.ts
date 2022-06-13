import { makeAutoObservable } from "mobx";

interface ListParams {
  name: string;
  age: number;
  id: number;
}

class DetailStore {
  constructor() {
    makeAutoObservable(this);
  }

  list: ListParams[] = [
    {
      name: "initName",
      age: 18,
      id: 1,
    },
  ];

  initList() {
    this.list = [
      {
        name: "name1",
        age: 18,
        id: 2,
      },
      {
        name: "name2",
        age: 19,
        id: 3,
      },
      {
        name: "name3",
        age: 20,
        id: 4,
      },
    ];
  }

  addItem() {
    this.list.push({
      name: "dnhyxc",
      age: this.list.length + 18,
      id: this.list.length + 999,
    });
  }

  deleteItem(index: number) {
    const id = this.list.findIndex((i) => i.id === index);
    console.log(id);
    this.list.splice(id, 1);
  }
}

export default new DetailStore();
