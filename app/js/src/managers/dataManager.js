const dataManager = {
  bet: 1,
  minBet: 1,
  maxBet: 3,
  points: 0,
  maxPoints: 6000,
  changeBet(val) {
    this.bet += val;
    this.bet = this.bet < this.maxBet ? this.bet : this.maxBet;
    this.bet = this.bet > this.minBet ? this.bet : this.minBet;
    return this.bet;
  },
};

export default dataManager;
