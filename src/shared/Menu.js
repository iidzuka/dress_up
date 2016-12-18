class Tab {
  constructor(option) {
    this.name = option.name || '';
  }
}

class TabManager {
  constructor() {
    this.tabList = [];
  }

  getByName(name) {
    const present = this.tabList.findIndex(tab => tab.name === name);
    if (present >= 0) return this.tabList[present];
    const newTab = new Tab({ name });
    this.tabList.push(newTab);
    return newTab;
  }
}

class MenuItem {
  constructor(option) {
    this.name = option.name || '';
    this.tab = option.tab || '';
  }
}

export default class Menu {
  constructor() {
    this.list = [];
    this.tabManager = new TabManager();
    this.active = null;
  }

  addMenu(option) {
    const tab = this.tabManager.getByName(option.tabName);
    const newItem = new MenuItem({
      name: option.name,
      tab,
    });
    this.list.push(newItem);
  }
}
