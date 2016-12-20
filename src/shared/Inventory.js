class Item {
  constructor(option) {
    this.name = option.name || null;
    this.tag = option.tag || null;
  }

  scan(name, tag) {
    return name && (this.name === name || this.tag === tag);
  }
}

export default class Inventory {
  constructor() {
    this.itemList = [];
  }

  addItem(option) {
    const newItem = new Item(option);
    this.itemList.push(newItem);
  }

  getItem(name, tag) {
    return this.itemList.find(item => item.scan(name, tag));
  }
}
