export default class DOWrap {
  constructor(DO) {
    this.DO = DO || new createjs.Container();
  }
  remove() {
    this.DO.parent.removeChild(this.DO);
  }
}
