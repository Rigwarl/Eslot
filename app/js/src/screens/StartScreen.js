import screenManager from '../managers/screenManager';
import Btn from '../display/Btn';

export default class MainScreen extends createjs.Container {
  constructor() {
    super();

    this.createText();
    this.createStartBtn();
  }
  createText() {
    this.text = new createjs.Text('Are you ready?', '40px Arial', '#000');
    this.text.textAlign = 'center';
    this.text.x = screenManager.width / 2;
    this.text.y = 175;
    this.addChild(this.text);
  }
  createStartBtn() {
    this.startBtn = new Btn('Start');
    this.startBtn.x = (screenManager.width / 2) - 75;
    this.startBtn.y = screenManager.height / 2;

    this.startBtn.on('click', () => screenManager.change('MainScreen'), null, true);
    this.addChild(this.startBtn);
  }
}
