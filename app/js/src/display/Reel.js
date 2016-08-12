export default class Reel extends createjs.Container {
  constructor() {
    super();

    this.bg = new createjs.Shape();
    this.bg.graphics.beginFill('#0000ff').drawRect(0, 0, 150, 150);

    this.addChild(this.bg);
  }
}
