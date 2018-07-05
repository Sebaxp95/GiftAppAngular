export class Product {
  public name: string;
  public price: number;
  public imageUrl: string;
  public url: string;
  public popularity: number;
  public poll: object;

  constructor(name, price, imageUrl, url, popularity, poll) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.url = url;
    this.popularity = popularity;
    this.poll = poll;
  }
}
