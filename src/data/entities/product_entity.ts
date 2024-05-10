export default class ProductEntity {
  public id: string;
  public name: string;
  public price: number;
  public categories: string;
  public description: string;
  public imageUrl: string;

  constructor(
    id: string,
    name: string,
    price: number,
    categories: string,
    description: string,
    imageUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.categories = categories;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  toJSON(): {
    id: string;
    name: string;
    price: number;
    categories: string;
    description: string;
    imageUrl: string;
  } {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      categories: this.categories,
      description: this.description,
      imageUrl: this.imageUrl,
    };
  }

  static fromJsonString(value: string) {
    return JSON.parse(value) as ProductEntity[];
  }
}
