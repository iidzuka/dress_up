/* 着せ替えされるCharacter
 *
 */
export default class Charactor {
  constructor(option) {
    this.name = option.name;
    this.regard = 0;
    this.normalImageUrl = option.normalImageUrl;
    this.sdImageUrl = option.sdImageUrl;
    this.dressingPlace = option.dressingPlace;
    this.dressList = option.dressList;
  }

  update(option) {
    this.setDress(option);
    this.updateDisplay();
  }

  setDress(dressObject) {
    if (!dressObject) return;
    const canDress = this.dressingPlace.findIndex(dress => dress.tab === dressObject.tab);
    if (canDress === -1) return;
    const dressIndex = this.dressList.findIndex(dress => dress.tab === dressObject.tab);
    this.dressList.push(dressObject);
    if (dressIndex === -1) return;
    this.dressList.splice(dressObject, 1);
  }

  updateDisplay() {
    this.regard += 1;
  }
}
