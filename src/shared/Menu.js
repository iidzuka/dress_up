class MenuItem {
  constructor(option) {
    this.name = option.name || null;
    this.item = option.item || null;
    this.action = option.action || null;
  }
}

export default class Menu {
  constructor() {
    this.list = [];
    this.active = null;
  }

  addMenu(option) {
    const newItem = new MenuItem({
      name: option.name,
      item: option.item,
    });
    this.list.push(newItem);
  }
}
