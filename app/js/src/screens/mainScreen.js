import screenManager from '../managers/screenManager';
import DOWrap from '../display/DOWrap';
import Reel from '../display/Reel';

export default class MainScreen extends DOWrap {
  constructor() {
    super();

    this.createLabel();
    this.createReel();
  }
  createLabel() {
    this.label = new createjs.Text('Hello World', '50px Arial', '#000');
    this.label.textAlign = 'center';
    this.label.x = screenManager.width / 2;
    this.label.y = 100;
    this.DO.addChild(this.label);
  }
  createReel() {
    this.reel = new Reel();
    this.reel.DO.x = 100;
    this.reel.DO.y = 250;
    this.DO.addChild(this.reel.DO);
  }
}
