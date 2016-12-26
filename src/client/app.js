import $ from 'jquery';
import Menu from '../shared/Menu';
import TagManager from '../shared/TagManager';
import Inventory from '../shared/Inventory';
import Character from '../shared/Character';

const menu = new Menu();
const tagManager = new TagManager();
const inventory = new Inventory();

require('jquery-ui/ui/core');
require('jquery-ui/ui/widget');
require('jquery-ui/ui/widgets/draggable');

tagManager.addTag({ name: 'main', type: 'menu' });
tagManager.addTag({ name: 'head', type: 'dress' });
tagManager.addTag({ name: 'tops', type: 'dress' });
tagManager.addTag({ name: 'botoms', type: 'dress' });
tagManager.addTag({ name: 'foot', type: 'dress' });

inventory.addItem({
  name: 'hat',
  tag: tagManager.getTag({ name: 'head', type: 'dress' }),
  icon: 'image/hat_icon.png',
});
inventory.addItem({
  name: 'shirt',
  tag: tagManager.getTag({ name: 'tops', type: 'dress' }),
  icon: 'image/shirt_icon.png',
});
inventory.addItem({
  name: 'skirt',
  tag: tagManager.getTag({ name: 'botoms', type: 'dress' }),
  icon: 'image/skirt_icon.png',
});
inventory.addItem({
  name: 'shoes',
  tag: tagManager.getTag({ name: 'foot', type: 'dress' }),
  icon: 'image/shoes_icon.png',
});

menu.addMenu({ name: 'headDress1', item: inventory.getItem('hat') });
menu.addMenu({ name: 'headDress2', item: inventory.getItem('hat') });
menu.addMenu({ name: 'headDress3', item: inventory.getItem('hat') });
menu.addMenu({ name: 'headDress4', item: inventory.getItem('hat') });
menu.addMenu({ name: 'topsDress1', item: inventory.getItem('shirt') });
menu.addMenu({ name: 'botomsDress1', item: inventory.getItem('skirt') });
menu.addMenu({ name: 'footDress1', item: inventory.getItem('shoes') });

$(() => {
  const chara = new Character({
    name: 'suwako',
    normalImageUrl: 'image/suwako.png',
    sdImageUrl: 'image/suwako_dot.png',
    type: 'normal',
    dressingPlace: [
      tagManager.getTag({ name: 'head', type: 'dress' }),
      tagManager.getTag({ name: 'tops', type: 'dress' }),
      tagManager.getTag({ name: 'botoms', type: 'dress' }),
      tagManager.getTag({ name: 'foot', type: 'dress' }),
    ],
    inventory,
  });
  menu.render($('.menu'));
  chara.render($('.mainWindow'));
//  chara.changeImage('sd');
  console.log(menu, chara, inventory);
});
