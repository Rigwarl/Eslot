import Btn from './Btn';

export default class Gui extends createjs.Container {
  constructor() {
    super();

    this.createBtns();
    this.bindEvents();
  }
  createBtns() {
    this.playBtn = new Btn('Play');
    this.stopBtn = new Btn('Stop');
    this.addChild(this.playBtn);
  }
  bindEvents() {
    this.playBtn.addEventListener('click', () => {
      this.removeChild(this.playBtn);
      this.addChild(this.stopBtn);
    });
  }
  toReadyState() {
    this.removeChild(this.stopBtn);
    this.addChild(this.playBtn);
  }
}
