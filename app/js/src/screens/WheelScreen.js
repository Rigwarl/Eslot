import screenManager from '../managers/screenManager';
import Btn from '../display/Btn';
import FortuneWheel from '../display/FortuneWheel';

export default class WheelScreen extends createjs.Container {
  constructor() {
    super();

    this.createWheel();
    this.createRollBtn();
    this.createPointer();
  }
  createWheel() {
    this.wheel = new FortuneWheel([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    this.wheel.x = screenManager.width / 2;
    this.wheel.y = 275;
    this.addChild(this.wheel);
  }
  createRollBtn() {
    this.rollBtn = new Btn('Roll!');
    this.rollBtn.x = (screenManager.width / 2) - 75;
    this.rollBtn.y = 515;

    this.rollBtn.on('click', () => {
      this.rollBtn.disable();
      this.wheel.roll(3);
    });
    this.addChild(this.rollBtn);
  }
  createPointer() {
    this.pointer = new createjs.Shape();
    this.pointer.graphics.beginFill('#00ff00')
      .moveTo(0, 0)
      .lineTo(40, -50)
      .lineTo(-40, -50);
    this.pointer.x = screenManager.width / 2;
    this.pointer.y = 80;

    this.addChild(this.pointer);
  }
}
