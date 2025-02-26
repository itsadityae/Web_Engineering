//class 3 :
class Bank_Acc {
  bankName = "National Bank";
  #balance;
  #interestRate;

  constructor(name, balance, interestRate) {
    this.name = name;
    this.#balance = balance;
    this.#interestRate = interestRate;
  }

  static BankInfo() {
    return this.bankName; // Access static property
  }

  #calculateInterest() {
    return this.#balance * (this.#interestRate / 100);
  }

  getBalance() {
    return this.#balance + this.#calculateInterest();
  }
}

class Savings_Acc extends Bank_Acc {
  constructor(balance, interestRate, extraInterest) {
    super(balance, interestRate);
    this.extraInterest = extraInterest;
  }

  getBalance() {
    let parentBalance = super.getBalance();
    let extraInterestAmount = parentBalance * (this.extraInterest / 100);
    return parentBalance + extraInterestAmount;
  }
}
