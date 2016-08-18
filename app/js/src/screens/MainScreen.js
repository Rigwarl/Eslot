import screenManager from '../managers/screenManager';
import dataManager from '../managers/dataManager';
import Slot from '../display/Slot';
import Gui from '../display/Gui';
import LoveBar from '../display/LoveBar';

export default class MainScreen extends createjs.Container {
  constructor() {
    super();

    this.createLoveBar();
    this.createSlot();
    this.createGui();
  }
  createGui() {
    this.gui = new Gui();
    this.gui.x = 125;
    this.gui.y = 500;
    this.addChild(this.gui);

    this.gui.playBtn.on('click', this.rollSlot, this);
  }
  rollSlot() {
    this.gui.toPlayState();
    this.slot.roll();

    Promise.race([
      new Promise(resolve => setTimeout(resolve, 2500)),
      new Promise(resolve => this.gui.stopBtn.on('click', () => {
        this.gui.stopBtn.disable();
        resolve();
      }, null, true)),
    ]).then(() => this.slot.stop(['Л', 'О', 'Л']))
      .then(() => {
        dataManager.points += 700 * dataManager.bet;
        this.loveBar.moveProgress();
        this.gui.stopBtn.enable();
        this.gui.toReadyState();
      });
  }
  createLoveBar() {
    this.loveBar = new LoveBar();
    this.loveBar.x = screenManager.width / 2;
    this.loveBar.y = 50;
    this.addChild(this.loveBar);
  }
  createSlot() {
    this.slot = new Slot();
    this.slot.x = screenManager.width / 2;
    this.slot.y = 150;
    this.addChild(this.slot);
  }
}
