const serverManager = {
  getData() {
    return new Promise(resolve => setTimeout(() => resolve({
      bet: 3,
      minBet: 2,
      maxBet: 5,
      points: 1300,
      maxPoints: 7000,
    }), 1500));
  },
};

export default serverManager;
