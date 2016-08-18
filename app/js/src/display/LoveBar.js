export default class LoveBar extends createjs.Container {
  constructor(points, maxPoints) {
    super();

    this.maxPoints = maxPoints;
    this.width = 300;
    this.height = 50;
    this.regX = this.width / 2;
    this.text = 'ЛЮБОВЬ';
    this.chars = [];

    this.createBg();
    this.createChars();
    this.moveProgress(points);
  }
  moveProgress(points) {
    const rate = points / this.maxPoints;
    let amount = Math.floor(rate * this.chars.length);

    createjs.Tween.get(this.progress)
      .to({ scaleX: rate }, 150)
      .call(() => {
        while (amount--) {
          this.chars[amount].color = '#fff';
        }
      });
  }
  createChars() {
    const charWidth = this.width / this.text.length;

    this.text.split('').forEach((el, i) => {
      const char = new createjs.Text(el, '25px Arial', '#0000ff');
      char.textAlign = 'center';
      char.textBaseline = 'middle';
      char.y = this.height / 2;
      char.x = charWidth * (i + 0.5);
      this.chars.push(char);
      this.addChild(char);
    });
  }
  createBg() {
    this.bg = new createjs.Shape();
    this.bg.graphics.beginFill('#00ff00').drawRoundRect(0, 0, this.width, this.height, 20);

    this.progressContainer = new createjs.Container();
    this.progress = new createjs.Shape();
    this.progress.graphics.beginFill('#ff0000').drawRect(0, 0, this.width, this.height);
    this.progress.scaleX = 0;
    this.progress.mask = this.bg;

    this.progressContainer.addChild(this.progress);
    this.addChild(this.bg, this.progressContainer);
  }
}
