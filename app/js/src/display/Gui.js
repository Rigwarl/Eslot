import Btn from './Btn';

export default class Gui extends createjs.Container {
  constructor() {
    super();
    this.createBtns();
  }
  createBtns() {
    this.playBtn = new Btn('Play');
    this.stopBtn = new Btn('Stop');
    this.addChild(this.playBtn);
  }
  toPlayState() {
    this.removeChild(this.playBtn);
    this.stopBtn.enable();
    this.addChild(this.stopBtn);
  }
  toReadyState() {
    this.removeChild(this.stopBtn);
    this.addChild(this.playBtn);
  }
}
