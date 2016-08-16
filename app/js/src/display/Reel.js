import Icon from './Icon';

export default class Reel extends createjs.Container {
  constructor() {
    super();
    this.createBg();
    this.createIcons();

    this.rolling = false;
    this.stopped = false;
    this.result = [null, null, null];

    this.on('tick', this.moveIcons, this);
  }
  roll() {
    this.rolling = true;
  }
  stop(result) {
    this.stopped = true;
    this.result = ['L', result, 'L'];

    return new Promise(resolve => this.on('stop', resolve, null, true));
  }

  moveIcons() {
    this.icons.forEach(icon => {
      if (!this.rolling) {
        return;
      }
      icon.y += 18;

      if (icon.y >= 320) {
        icon.y -= 480;

        if (this.stopped) {
          icon.symbol.text = this.result.pop();
        } else {
          icon.symbol.text = 'A';
        }
      } else if (icon.y >= 245 && this.stopped && !this.result.length) {
        this.stopIcons(icon);
      }
    });
  }
  stopIcons(lastIcon) {
    this.rolling = false;
    this.stopped = false;
    this.dispatchEvent('stop');

    let iconPos = this.icons.indexOf(lastIcon);
    lastIcon.y = 245;
    this.icons[++iconPos % 3].y = -75;
    this.icons[++iconPos % 3].y = 85;
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
}
