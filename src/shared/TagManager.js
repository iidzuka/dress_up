class Tag {
  constructor(option) {
    this.name = option.name || null;
    this.type = option.type || null;
  }

  getTagName() {
    return this.name;
  }
}

export default class TagManager {
  constructor() {
    this.tagList = [];
  }

  addTag(option) {
    const name = option.name || null;
    const type = option.type || null;
    const present = this.getTag(option);
    if (present) return;
    const newTab = new Tag({ name, type });
    this.tagList.push(newTab);
  }

  getTag(option) {
    const name = option.name || null;
    const type = option.type || null;
    const present = this.tagList.find(tag => tag.name === name && tag.type === type);
    return present;
  }
}
