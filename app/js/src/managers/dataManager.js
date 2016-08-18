const dataManager = {
  bet: null,
  minBet: null,
  maxBet: null,
  points: null,
  maxPoints: null,
  winTable: null,
  changeBet(val) {
    const newBet = this.bet + val;
    if (newBet <= this.maxBet && newBet >= this.minBet) {
      this.bet = newBet;
    }
    return this.bet;
  },
};

export default dataManager;
