import Reel from './Reel';

export default class Slot extends createjs.Container {
  constructor() {
    super();
    this.createBg();
    this.createReels();
  }
  createBg() {
    this.bg = new createjs.Shape();
    this.bg.graphics.beginFill('#00ff00').drawRect(0, 0, 490, 320);
    this.addChild(this.bg);
  }
  createReels() {
    const reelsContainer = new createjs.Container();
    this.addChild(reelsContainer);
    reelsContainer.mask = this.bg;

    this.reels = [];
    for (let i = 0; i < 3; i++) {
      const reel = new Reel();
      reel.x = (i * 160) + 10;
      this.reels.push(reel);
      reelsContainer.addChild(reel);
    }
  }
  roll() {
    this.reels.forEach(reel => reel.roll());
  }
}
