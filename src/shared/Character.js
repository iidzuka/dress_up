import $ from 'jquery';

require('jquery-ui/ui/core');
require('jquery-ui/ui/widget');
require('jquery-ui/ui/widgets/droppable');
/* 着せ替えされるCharacter
 *
 */
export default class Charactor {
  constructor(option) {
    const options = option || {};
    if (typeof options === 'object') {
      this.name = option.name;
      this.regard = 0;
      this.normalImageUrl = option.normalImageUrl;
      this.sdImageUrl = option.sdImageUrl;
      this.dressingPlace = option.dressingPlace;
      this.dressList = option.dressList || [];
      this.type = option.type;
      this.allItem = option.inventory; 
    }
  }

  update(option) {
    this.setDress(option);
    this.updateDisplay();
  }

  setDress(dressObject) {
    if (!dressObject) return;
    const canDress = this.dressingPlace.findIndex(place => place === dressObject.tag);
    if (canDress === -1) return;
    const dressIndex = this.dressList.findIndex(dress => dress.tag === dressObject.tag);
    console.log(dressIndex)
    this.dressList.push(dressObject);
    if (dressIndex === -1) return;
    this.dressList.splice(dressObject, 1);
  }

  updateDisplay() {
    this.$charArea.find('.dress').remove();
    $.each(this.dressList, (i, dress) => {
      this.$charArea.append(dress.render('dress'));
    });
  }

  render($target) {
    this.$charArea = $(`<div class="${this.name} charArea">`);
    console.log(this.$charArea)
    const $characterImage = $('<img class="character" />');
    $characterImage.attr('src', this.normalImageUrl);
    $characterImage.attr('height', '100%');
    $characterImage.attr('width', 'auto');
    $characterImage.droppable({
      drop: (e, u) => {
        if (this.type === 'normal') {
          const itemId = $(u.draggable).find('.icon').data('id');
          const item = this.allItem.getItemById(itemId);
          this.update(item);
        }
      },
    });
    this.$characterImage = $characterImage;
    this.$charArea.append($characterImage);
    $target.append(this.$charArea);
  }

  changeImage(type) {
    let url = this.normalImageUrl;
    this.type = type;
    if (type === 'sd') {
      url = this.sdImageUrl;
    }
    this.$character.attr('src', url);
  }
}
