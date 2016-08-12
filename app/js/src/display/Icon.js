export default class Icon extends createjs.Container {
  constructor() {
    super();

    this.createBg();
    this.createSymbol();
  }
  createBg() {
    this.bg = new createjs.Shape();
    this.bg.graphics.beginFill('#ff0000').drawRect(0, 0, 150, 150);
    this.addChild(this.bg);
  }
  createSymbol() {
    this.symbol = new createjs.Text('F', '100px Arial', '#000');
    this.symbol.x = 75;
    this.symbol.y = 15;
    this.symbol.textAlign = 'center';
    this.addChild(this.symbol);
  }
}
