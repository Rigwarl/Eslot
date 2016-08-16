import MainScreen from '../screens/MainScreen';

const screenManager = {
  init(stage) {
    this.stage = stage;
    this.width = stage.canvas.width;
    this.height = stage.canvas.height;
    this.current = null;

    this.screens = {
      main: MainScreen,
    };

    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener('tick', this.stage);
    this.stage.enableMouseOver();
  },
  change(screenName) {
    if (this.current) {
      this.stage.removeChild(this.current);
    }
    this.current = new this.screens[screenName]();
    this.stage.addChild(this.current);
  },
};

export default screenManager;
