import DOWrap from './DOWrap';

export default class Reel extends DOWrap {
  constructor() {
    super();

    this.bg = new createjs.Shape();
    this.bg.graphics.beginFill('#00ff00').drawRect(0, 0, 400, 150);

    this.addChild(this.bg);
  }
}
