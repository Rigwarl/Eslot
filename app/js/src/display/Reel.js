import Icon from './Icon';

export default class Reel extends createjs.Container {
  constructor() {
    super();
    this.createBg();
    this.createIcons();
  }
  createBg() {
    this.bg = new createjs.Shape();
    this.bg.graphics.beginFill('#0000ff').drawRect(0, 0, 150, 320);
    this.addChild(this.bg);
  }
  createIcons() {
    this.icons = [];

    for (let i = 0; i < 3; i++) {
      const icon = new Icon();
      icon.y = (i * 160) - 75;
      this.icons.push(icon);
      this.addChild(icon);
    }
  }
}
