import Reel from './Reel';

export default class Slot extends createjs.Container {
  constructor() {
    super();

    this.bg = new createjs.Shape();
    this.bg.graphics.beginFill('#00ff00').drawRect(0, 0, 470, 150);

    this.addChild(this.bg);

    this.createReels();
  }
  createReels() {
    this.reels = [];

    for (let i = 0; i < 3; i++) {
      const reel = new Reel();
      reel.x = (i * 160);
      this.reels.push(reel);
      this.addChild(reel);
    }
  }
  roll() {
    this.reels.forEach(reel => reel.roll());
  }
}
