import Icon from './Icon';

export default class Reel extends createjs.Container {
  constructor() {
    super();
    this.createBg();
    this.createIcons();
    this.bindEvents();

    this.rolling = false;
    this.stopped = false;
    this.result = [null, null, null];
  }
  roll() {
    this.rolling = true;
  }
  stop(result, timeout) {
    setTimeout(() => {
      this.stopped = true;
      this.result = ['L', result, 'L'];
    }, timeout);
  }
  tick() {
    if (this.rolling) {
      this.icons.forEach(icon => {
        icon.y += 16;

        if (icon.y >= 320) {
          icon.y -= 480;

          if (this.stopped) {
            icon.symbol.text = this.result.pop();
          } else {
            icon.symbol.text = 'A';
          }
        } else if (icon.y >= 245 && this.stopped && !this.result.length) {
          this.rolling = false;
          this.stopped = false;
        }
      });
    }
  }
  createBg() {
    this.bg = new createjs.Shape();
    this.bg.graphics.beginFill('#0000ff').drawRect(0, 0, 150, 320);
    this.addChild(this.bg);
  }
  createIcons() {
    this.icons = [];

    for (let i = 0; i < 3; i++) {
      const icon = new Icon();
      icon.y = (i * 160) - 75;
      this.icons.push(icon);
      this.addChild(icon);
    }
  }
  bindEvents() {
    this.addEventListener('tick', () => this.tick());
  }
}
