const data = {
  points: 0,
  win: 0,
  finished: false,
  bet: 3,
  minBet: 2,
  maxBet: 5,
  maxPoints: 7000,
  winTable: [1, 2, 5, 25, 50],
  symbols: null,
};

const serverManager = {
  getData() {
    return new Promise(resolve => setTimeout(() => resolve(data), 1500));
  },
  roll(bet) {
    return new Promise(resolve => setTimeout(() => {
      data.bet = bet;
      data.win = bet * 350;
      data.symbols = ['Л', 'О', 'Л'];

      const newPoints = data.points + data.win;
      if (newPoints >= data.maxPoints) {
        data.points = data.maxPoints;
        data.finished = true;
      } else {
        data.points = newPoints;
      }

      resolve(data);
    }, 1500));
  },
};

export default serverManager;
