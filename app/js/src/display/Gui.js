import Btn from './Btn';

export default class Gui extends createjs.Container {
  constructor() {
    super();
    this.createBtns();
    this.createBet();
  }
  createBtns() {
    this.playBtn = new Btn('Play');
    this.stopBtn = new Btn('Stop');
    this.stopBtn.x = this.playBtn.x = 400;
    this.addChild(this.playBtn);
  }
  createBet() {
    const betDown = new Btn('↓');
    const betUp = new Btn('↑');
    const bet = new createjs.Text('1', '35px Arial', '#000');
    bet.x = 165;
    bet.y = 8;
    betUp.x = 200;

    this.addChild(betUp, betDown, bet);
  }
  toPlayState() {
    this.removeChild(this.playBtn);
    this.addChild(this.stopBtn);
  }
  toReadyState() {
    this.removeChild(this.stopBtn);
    this.addChild(this.playBtn);
  }
}
