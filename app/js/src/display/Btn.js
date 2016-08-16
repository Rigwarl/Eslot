export default class Btn extends createjs.Container {
  constructor(text) {
    super();

    this.disabled = false;

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
    this.text.x = 75;
    this.text.y = 25;
    this.text.textAlign = 'center';
    this.text.textBaseline = 'middle';
    this.addChild(this.text);
  }
  enable() {
    this.disabled = false;
    this.dispatchEvent('rollout');
  }
  disable() {
    this.disabled = true;
    this.bg.graphics = new createjs.Graphics().beginFill('#666666').drawRoundRect(0, 0, 150, 50, 25);
  }
  bindEvents() {
    this.addEventListener('rollover', () => {
      if (this.disabled) {
        return;
      }
      this.bg.graphics = new createjs.Graphics().beginFill('#ff0000').drawRoundRect(0, 0, 150, 50, 25);
      this.cursor = 'pointer';
    });
    this.addEventListener('rollout', () => {
      if (this.disabled) {
        return;
      }
      this.bg.graphics = new createjs.Graphics().beginFill('#00ff00').drawRoundRect(0, 0, 150, 50, 25);
      this.cursor = null;
    });
  }
}
