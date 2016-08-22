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
    this.betDown = new Btn('↓');
    this.betUp = new Btn('↑');
    this.bet = new createjs.Text('', '35px Arial', '#000');
    this.bet.x = 165;
    this.bet.y = 8;
    this.betUp.x = 200;

    this.addChild(this.betUp, this.betDown, this.bet);
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
