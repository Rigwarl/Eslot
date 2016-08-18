export default class WinTable extends createjs.Container {
  constructor(winTable, bet) {
    super();

    this.winTable = winTable;
    this.lines = [];
    this.createLines(bet);
  }
  setBet(bet) {
    this.lines.forEach((line, i) => {
      line.text = this.winTable[i] * bet;
    });
  }
  createLines(bet) {
    this.winTable.reverse().forEach((win, i) => {
      const line = new createjs.Text(win * bet, '25px Arial', '#000');
      line.y = i * 35;
      line.textBaseline = 'middle';
      line.textAlign = 'right';
      this.lines.push(line);
      this.addChild(line);
    });
  }
}
