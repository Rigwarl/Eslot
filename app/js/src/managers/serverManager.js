const serverManager = {
  currentPoints: 1300,
  getData() {
    return new Promise(resolve => setTimeout(() => resolve({
      bet: 3,
      minBet: 2,
      maxBet: 5,
      points: this.currentPoints,
      maxPoints: 7000,
      winTable: [1, 2, 5, 25, 50],
    }), 1500));
  },
  roll(bet) {
    return new Promise(resolve => setTimeout(() => {
      this.currentPoints += 350 * bet;
      resolve({
        win: 350 * bet,
        points: this.currentPoints,
        symbols: ['Л', 'О', 'Л'],
      });
    }, 1500));
  },
};

export default serverManager;
