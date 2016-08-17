export default class Btn extends createjs.Container {
  constructor(text) {
    super();

    this.cursor = 'pointer';
    this.enabled = true;
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
    this.enabled = true;
    this.mouseEnabled = true;
    this.checkOver();
  }
  disable() {
    this.change('#666666');
    this.enabled = false;
    this.mouseEnabled = false;
  }
  checkOver() {
    if (!this.stage) {
      return;
    }
    const point = this.globalToLocal(this.stage.mouseX, this.stage.mouseY);

    if (this.hitTest(point.x, point.y)) {
      this.change('#ff0000');
    } else {
      this.change('#00ff00');
    }
  }
  change(color) {
    if (!this.enabled) {
      return;
    }
    this.bg.graphics = new createjs.Graphics().beginFill(color).drawRoundRect(0, 0, 150, 50, 25);
  }
  bindEvents() {
    this.addEventListener('rollover', () => this.change('#ff0000'));
    this.addEventListener('rollout', () => this.change('#00ff00'));
    this.addEventListener('mousedown', () => this.change('#0000ff'));
    this.addEventListener('pressup', () => this.checkOver());
    this.addEventListener('added', () => this.checkOver());
  }
}
