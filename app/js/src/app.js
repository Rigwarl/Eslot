import serverManager from './managers/serverManager';
import dataManager from './managers/dataManager';
import sourceManager from './managers/sourceManager';
import screenManager from './managers/screenManager';
import Preloader from './display/Preloader';

const app = {
  init() {
    this.stage = new createjs.Stage('game-stage');
    this.createPreloader();

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener('tick', this.stage);
    this.stage.enableMouseOver();

    Promise.all([
      serverManager.getData().then(r => this.setData(r)),
      sourceManager.load(e => this.preloader.animate(e.progress)),
    ]).then(() => this.startGame());
  },
  startGame() {
    this.stage.removeChild(this.preloader);
    this.preloader = null;

    const bg = new createjs.Bitmap(sourceManager.getResult('bg'));
    this.stage.addChild(bg);

    screenManager.init(this.stage);
    screenManager.change('StartScreen');
  },
  setData(data) {
    dataManager.bet = data.bet;
    dataManager.maxBet = data.maxBet;
    dataManager.minBet = data.minBet;
    dataManager.points = data.points;
    dataManager.winTable = data.winTable;
    dataManager.maxPoints = data.maxPoints;
  },
  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.x = this.stage.canvas.width / 2;
    this.preloader.y = this.stage.canvas.height / 2;
    this.stage.addChild(this.preloader);
  },
};

app.init();
