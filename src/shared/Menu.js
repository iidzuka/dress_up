import $ from 'jquery';

require('jquery-ui/ui/core');
require('jquery-ui/ui/widget');
require('jquery-ui/ui/widgets/draggable');

class MenuItem {
  constructor(option) {
    this.name = option.name || null;
    this.item = option.item || null;
    this.action = option.action || null;
  }

  render($target) {
    const item = this.item.render();
    $target.append(item);
  }
  getTagName() {
    return this.item.getTagName();
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
  getTagNameList() {
    const tagNameList = $.unique($.map(this.list, item => item.getTagName()));
    return tagNameList;
  }
  render($target) {
    const tagNameList = this.getTagNameList();
    const $tabs = $('<div class="tabs"></div>');
    const $tabAreas = $('<div class="tabArea"></div>');
    $.each(tagNameList, (i, tag) => {
      const $tab = $(`<div class="${tag} tab" >${tag}</div>`);
      const $tabArea = $(`<div class="${tag} area" ></div>`);
      if (i === 0) {
        $tab.addClass('active')
        $tabAreas.addClass('active');
      }
      $tabAreas.append($tabArea);
      $tabs.append($tab);
    });
    const $extra = $('<div class="extraTab"></div>');
    $tabs.append($extra);
    $target.append($tabs);
    $target.append($tabAreas);
  }
}
