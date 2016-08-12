import screenManager from '../managers/screenManager';
import Slot from '../display/Slot';
import Btn from '../display/Btn';

export default class MainScreen extends createjs.Container {
  constructor() {
    super();

    this.createLabel();
    this.createSlot();
    this.createGui();
  }
  createGui() {
    this.playBtn = new Btn('Play');
    this.playBtn.x = 270;
    this.playBtn.y = 500;
    this.addChild(this.playBtn);

    this.playBtn.addEventListener('click', () => {
      this.slot.roll();
      setTimeout(() => this.slot.stop(['Л', 'О', 'Л']), 2000);
    });
  }
  createLabel() {
    this.label = new createjs.Text('Hello World', '50px Arial', '#000');
    this.label.textAlign = 'center';
    this.label.x = screenManager.width / 2;
    this.label.y = 50;
    this.addChild(this.label);
  }
  createSlot() {
    this.slot = new Slot();
    this.slot.x = 100;
    this.slot.y = 150;
    this.addChild(this.slot);
  }
}
