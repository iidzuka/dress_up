class Tag {
  constructor(option) {
    this.name = option.name || null;
    this.type = option.type || null;
  }
}

export default class TagManager {
  constructor() {
    this.tagList = [];
  }

  getByNameAndType(name, type) {
    const present = this.tagList.findIndex(tag => tag.name === name && tag.type === type);
    if (present >= 0) return this.tagList[present];
    const newTab = new Tag({ name, type });
    this.tagList.push(newTab);
    return newTab;
  }
}
