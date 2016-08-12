import MainScreen from '../screens/mainScreen';

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
  },
  change(screenName) {
    if (this.current) {
      this.current.remove();
    }
    this.current = new this.screens[screenName]();
    this.stage.addChild(this.current);
  },
};

export default screenManager;
