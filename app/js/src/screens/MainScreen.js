import screenManager from '../managers/screenManager';
import Slot from '../display/Slot';

export default class MainScreen extends createjs.Container {
  constructor() {
    super();

    this.createLabel();
    this.createSlot();
  }
  createLabel() {
    this.label = new createjs.Text('Hello World', '50px Arial', '#000');
    this.label.textAlign = 'center';
    this.label.x = screenManager.width / 2;
    this.label.y = 100;
    this.addChild(this.label);
  }
  createSlot() {
    this.slot = new Slot();
    this.slot.x = 100;
    this.slot.y = 250;
    this.addChild(this.slot);
  }
}
