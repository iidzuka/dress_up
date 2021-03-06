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
  image: 'image/hat.png',
});
inventory.addItem({
  name: 'hat2',
  tag: tagManager.getTag({ name: 'head', type: 'dress' }),
  icon: 'image/hat_icon2.png',
  image: 'image/hat2.png',
});
inventory.addItem({
  name: 'shirt',
  tag: tagManager.getTag({ name: 'tops', type: 'dress' }),
  icon: 'image/shirt_icon.png',
  image: 'image/tops.png',
});
inventory.addItem({
  name: 'shirt2',
  tag: tagManager.getTag({ name: 'tops', type: 'dress' }),
  icon: 'image/shirt_icon2.png',
  image: 'image/tops2.png',
});
inventory.addItem({
  name: 'skirt',
  tag: tagManager.getTag({ name: 'botoms', type: 'dress' }),
  icon: 'image/skirt_icon.png',
  image: 'image/botoms.png',
});
inventory.addItem({
  name: 'skirt2',
  tag: tagManager.getTag({ name: 'botoms', type: 'dress' }),
  icon: 'image/skirt_icon2.png',
  image: 'image/botoms2.png',
});
inventory.addItem({
  name: 'shoes',
  tag: tagManager.getTag({ name: 'foot', type: 'dress' }),
  icon: 'image/shoes_icon.png',
  image: 'image/shoes.png',
});
inventory.addItem({
  name: 'shoes2',
  tag: tagManager.getTag({ name: 'foot', type: 'dress' }),
  icon: 'image/shoes_icon2.png',
  image: 'image/shoes2.png',
});

menu.addMenu({ name: 'headDress1', item: inventory.getItem('hat') });
menu.addMenu({ name: 'headDress2', item: inventory.getItem('hat2') });
menu.addMenu({ name: 'topsDress1', item: inventory.getItem('shirt') });
menu.addMenu({ name: 'topsDress2', item: inventory.getItem('shirt2') });
menu.addMenu({ name: 'botomsDress1', item: inventory.getItem('skirt') });
menu.addMenu({ name: 'botomsDress4', item: inventory.getItem('skirt2') });
menu.addMenu({ name: 'footDress1', item: inventory.getItem('shoes') });
menu.addMenu({ name: 'footDress2', item: inventory.getItem('shoes2') });

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
    dressList: [
      inventory.getItem('hat'),
      inventory.getItem('shirt'),
      inventory.getItem('skirt'),
      inventory.getItem('shoes'),
    ],
    inventory,
  });
  menu.render($('.menu'));
  chara.render($('.mainWindow'));
//  chara.changeImage('sd');
  console.log(menu, chara, inventory);
});
