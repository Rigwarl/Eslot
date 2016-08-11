import sourceManager from './managers/sourceManager';
import Preloader from './display/Preloader';

const app = {
  init() {
    this.stage = new createjs.Stage('game-stage');

    this.createPreloader();

    sourceManager.load(e => this.preloader.animate(e.progress))
      .then(() => {
        this.preloader.remove();
        this.preloader = null;
      });

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener('tick', this.stage);
  },
  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.DO.x = this.stage.canvas.width / 2;
    this.preloader.DO.y = this.stage.canvas.height / 2;
    this.stage.addChild(this.preloader.DO);
  },
};

app.init();
