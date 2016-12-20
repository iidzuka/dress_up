class MenuItem {
  constructor(option) {
    this.name = option.name || null;
    this.tag = option.tag || null;
    this.action = option.action || null;
  }
}

class DressItem extends MenuItem {
}

class ButtonItem extends MenuItem {
}

export default class Menu {
  constructor() {
    this.list = [];
    this.active = null;
  }

  addMenu(option) {
    let newItem;
    if (option.type === 'dress') {
      newItem = new DressItem({
        name: option.name,
        tag: option.tag,
      });
    } else {
      newItem = new ButtonItem({
        name: option.name,
        tag: option.tag,
      });
    }
    this.list.push(newItem);
  }
}
