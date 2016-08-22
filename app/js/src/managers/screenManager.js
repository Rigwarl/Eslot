import StartScreen from '../screens/StartScreen';
import MainScreen from '../screens/MainScreen';
import WheelScreen from '../screens/WheelScreen';

const screenManager = {
  init(stage) {
    this.stage = stage;
    this.width = stage.canvas.width;
    this.height = stage.canvas.height;
    this.current = null;

    this.screens = {
      StartScreen,
      MainScreen,
      WheelScreen,
    };
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
