export default class FortuneWheel extends createjs.Container {
  constructor(symbols) {
    super();

    this.slices = [];
    for (let i = 0; i < 10; i++) {
      this.createSlice(symbols[i], i);
    }
  }
  createSlice(symbol, i) {
    const slice = new createjs.Container();
    const sliceText = new createjs.Text(symbol, '35px Arial', '#fff');
    sliceText.textAlign = 'center';
    sliceText.textBaseline = 'middle';
    sliceText.y = -135;

    slice.bg = new createjs.Shape();
    slice.bg.graphics.beginFill(i % 2 ? '#ff0000' : '#0000ff')
      .moveTo(0, 0)
      .arc(0, 0, 200, -Math.PI * (3 / 5), -Math.PI * (2 / 5));
    slice.rotation = i * 36;

    slice.addChild(slice.bg, sliceText);
    this.slices.push(slice);
    this.addChild(slice);
  }
  roll(num) {
    const rotation = (360 * 2) + (360 - (36 * num)) + ((Math.random() - 0.5) * 30);
    return new Promise(resolve => createjs.Tween.get(this)
      .to({ rotation }, 5000, createjs.Ease.getBackOut(0.8))
      .call(() => {
        this.slices[num].bg.graphics = new createjs.Graphics().beginFill('#00ff00')
          .moveTo(0, 0)
          .arc(0, 0, 200, -Math.PI * (3 / 5), -Math.PI * (2 / 5));
        resolve();
      }));
  }
}
