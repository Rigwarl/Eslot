const dataManager = {
  bet: null,
  minBet: null,
  maxBet: null,
  points: null,
  maxPoints: null,
  changeBet(val) {
    this.bet += val;
    this.bet = this.bet < this.maxBet ? this.bet : this.maxBet;
    this.bet = this.bet > this.minBet ? this.bet : this.minBet;
    return this.bet;
  },
};

export default dataManager;
