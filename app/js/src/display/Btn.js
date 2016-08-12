export default class Btn extends createjs.Container {
  constructor(text) {
    super();

    this.createBg();
    this.createText(text);
    this.bindEvents();
  }
  createBg() {
    this.bg = new createjs.Shape();
    this.bg.graphics.beginFill('#00ff00').drawRoundRect(0, 0, 150, 50, 25);
    this.addChild(this.bg);
  }
  createText(text) {
    this.text = new createjs.Text(text, '30px Arial', '#000');
    this.text.x = 46;
    this.text.y = 8;
    this.addChild(this.text);
  }
  bindEvents() {
    this.addEventListener('rollover', () => {
      this.bg.graphics = new createjs.Graphics().beginFill('#ff0000').drawRoundRect(0, 0, 150, 50, 25);
      this.cursor = 'pointer';
    });
    this.addEventListener('rollout', () => {
      this.bg.graphics = new createjs.Graphics().beginFill('#00ff00').drawRoundRect(0, 0, 150, 50, 25);
      this.cursor = null;
    });
  }
}
