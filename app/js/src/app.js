import sourceManager from './managers/sourceManager';
import screenManager from './managers/screenManager';
import Preloader from './display/Preloader';

const app = {
  init() {
    this.stage = new createjs.Stage('game-stage');

    this.createPreloader();

    sourceManager.load(e => {
      this.preloader.animate(e.progress);
      this.stage.update();
    }).then(() => {
      this.preloader.remove();
      this.preloader = null;

      const bg = new createjs.Bitmap(sourceManager.getResult('bg'));
      this.stage.addChild(bg);

      screenManager.init(this.stage);
      screenManager.change('main');
    });
  },
  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.DO.x = this.stage.canvas.width / 2;
    this.preloader.DO.y = this.stage.canvas.height / 2;
    this.stage.addChild(this.preloader.DO);
  },
};

app.init();
