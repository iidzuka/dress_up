import $ from 'jquery';

class Item {
  constructor(option) {
    this.name = option.name || null;
    this.tag = option.tag || null;
    this.icon = option.icon || null;
    this.image = option.image || null;
    this.id = option.id;
  }

  scan(name, tag) {
    return name && (this.name === name || this.tag === tag);
  }
  getTagName() {
    return this.tag.getTagName();
  }
  render(type) {
    let $item;
    if (type === 'icon') {
      $item = $(`<img src="${this.icon}" class="icon" data-id="${this.id}"/>`);
    }
    if (type === 'dress') {
      $item = $(`<img src="${this.image}" class="dress ${this.getTagName()}" data-id="${this.id}"/>`);
    }
    return $item;
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
  getItemById(id) {
    return this.itemList.find(item => item.id === id);
  }
}
