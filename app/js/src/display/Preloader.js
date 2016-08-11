import DOWrap from './DOWrap';

export default class Preloader extends DOWrap {
  constructor() {
    super();

    this.progress = new createjs.Shape();
    this.progress.graphics.beginFill('#ff0000').setStrokeStyle(4).drawRect(0, 0, 300, 50);
    this.progress.scaleX = 0;

    this.border = new createjs.Shape();
    this.border.graphics.beginStroke('#0000ff').setStrokeStyle(4).drawRect(0, 0, 300, 50);

    this.DO.regX = 150;
    this.DO.regY = 25;

    this.DO.addChild(this.progress, this.border);
  }
  animate(loaded) {
    this.progress.scaleX = loaded;
  }
}
