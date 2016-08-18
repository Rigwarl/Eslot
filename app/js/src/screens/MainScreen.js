import serverManager from '../managers/serverManager';
import screenManager from '../managers/screenManager';
import dataManager from '../managers/dataManager';
import Slot from '../display/Slot';
import Gui from '../display/Gui';
import LoveBar from '../display/LoveBar';
import WinTable from '../display/WinTable';

export default class MainScreen extends createjs.Container {
  constructor() {
    super();

    this.createLoveBar();
    this.createSlot();
    this.createWinTable();
    this.createGui();
  }
  rollSlot() {
    this.gui.toPlayState();
    this.gui.stopBtn.disable();
    this.slot.roll();

    const rollTimer = new Promise(resolve => setTimeout(resolve, 2500));

    serverManager.roll(dataManager.bet).then(r => {
      this.gui.stopBtn.enable();
      Promise.race([
        rollTimer,
        new Promise(resolve => this.bindStopBtnClick(resolve)),
      ]).then(() => this.slot.stop(r.symbols))
        .then(() => {
          dataManager.points = r.points;
          this.loveBar.moveProgress(r.points);
          this.gui.toReadyState();
        });
    });
  }
  bindStopBtnClick(callback) {
    this.gui.stopBtn.on('click', () => {
      this.gui.stopBtn.disable();
      callback();
    }, null, true);
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
  createWinTable() {
    this.winTable = new WinTable(dataManager.winTable, dataManager.bet);
    this.winTable.x = 85;
    this.winTable.y = 50;
    this.addChild(this.winTable);
  }
  createGui() {
    this.gui = new Gui();
    this.gui.bet.text = dataManager.bet;
    this.gui.x = 125;
    this.gui.y = 500;
    this.addChild(this.gui);

    this.gui.betUp.addEventListener('click', () => {
      this.gui.bet.text = dataManager.changeBet(1);
      this.winTable.setBet(dataManager.bet);
    });
    this.gui.betDown.addEventListener('click', () => {
      this.gui.bet.text = dataManager.changeBet(-1);
      this.winTable.setBet(dataManager.bet);
    });

    this.gui.playBtn.on('click', this.rollSlot, this);
  }
}
