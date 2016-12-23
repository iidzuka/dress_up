class Item {
  constructor(option) {
    this.name = option.name || null;
    this.tag = option.tag || null;
    this.id = option;
  }

  scan(name, tag) {
    return name && (this.name === name || this.tag === tag);
  }
  getTagName() {
    return this.tag.getTagName();
  }
}

export default class Inventory {
  constructor() {
    this.itemList = [];
    this.consumedId = 0;
  }

  addItem(option) {
    const newOption = Object.assign(option, { id: this.consumedId += 1 });
    const newItem = new Item(newOption);
    this.itemList.push(newItem);
  }

  getItem(name, tag) {
    return this.itemList.find(item => item.scan(name, tag));
  }
}
