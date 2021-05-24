 export class BankAccount {
  constructor() {
    this.currentBalance = 0;
    this.isOpen = false
  }

  open() {
    if(this.isOpen === true){
      throw new ValueError
    } else{
    return this.isOpen = true
    }
  }

  close() {
    if(this.isOpen === false){
      throw new ValueError
    } else if(this.currentBalance > 0){
      this.currentBalance = 0;
    }
    return this.isOpen = false
  }

  deposit(num) {
    if(this.isOpen === false || num < 0){
      throw new ValueError
    } else{
      this.currentBalance = this.currentBalance + num
    }
  }

  withdraw(num) {
    if(this.isOpen === false || this.currentBalance < num || num < 0){
      throw new ValueError
    } else {
      this.currentBalance = this.currentBalance - num
    }
  }

  get balance() {
    if(this.isOpen === false){
       throw new ValueError
    }else {
      return this.currentBalance
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
