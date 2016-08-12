import Reel from '../display/Reel';

export default class MainScreen extends createjs.Container {
  constructor() {
    super();

    this.width = 800;
    this.height = 600;

    this.createLabel();
    this.createReel();
  }
  createLabel() {
    this.label = new createjs.Text('Hello World', '50px Arial', '#000');
    this.label.textAlign = 'center';
    this.label.x = this.width / 2;
    this.label.y = 100;
    this.addChild(this.label);
  }
  createReel() {
    this.reel = new Reel();
    this.reel.x = 100;
    this.reel.y = 250;
    this.addChild(this.reel);
  }
}
