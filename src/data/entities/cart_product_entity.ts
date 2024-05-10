export default class CartProductEntity {
  public id: string;
  public name: string;
  public price: number;
  public quantity: number;

  constructor(id: string, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  static fromJsonString(value: string) {
    return JSON.parse(value) as CartProductEntity[];
  }
}
