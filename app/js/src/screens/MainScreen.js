import screenManager from '../managers/screenManager';
import Slot from '../display/Slot';
import Gui from '../display/Gui';

export default class MainScreen extends createjs.Container {
  constructor() {
    super();

    this.createLabel();
    this.createSlot();
    this.createGui();
  }
  createGui() {
    this.gui = new Gui();
    this.gui.x = 270;
    this.gui.y = 500;
    this.addChild(this.gui);

    this.gui.playBtn.on('click', this.rollSlot, this);
  }
  rollSlot() {
    this.slot.roll();

    Promise.race([
      new Promise(resolve => setTimeout(resolve, 2500)),
      new Promise(resolve => this.gui.stopBtn.on('click', resolve, null, true)),
    ]).then(() => this.slot.stop(['Л', 'О', 'Л']))
      .then(() => this.gui.toReadyState());
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
