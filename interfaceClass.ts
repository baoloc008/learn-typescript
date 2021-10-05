interface HasPrint {
  print(): string;
}

class Invoice implements HasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}

  print(): string {
    return `${this.client} owes ${this.amount} dollar(s) for this work: ${this.work}`;
  }
}

class Payment implements HasPrint {
  constructor(
    readonly recipient: string,
    private job: string,
    public amt: number
  ) {}

  print(): string {
    return `I owe ${this.recipient} ${this.amt} for this job: ${this.job}`;
  }
}

const documentOne: HasPrint = new Invoice("Vina Milk", "drink mill", 500);
const documentTwo: HasPrint = new Payment("Vietnam Airlines", "fly", 25);

const allDocuments: HasPrint[] = [];
allDocuments.push(documentOne, documentTwo);

console.log(allDocuments);
