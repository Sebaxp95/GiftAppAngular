export class Product {
  name: string;
  price: number;
  imageUrl: string;
  url: string;
  popularity: number;
  poll: Poll;

  constructor(name: string, price: number, imageUrl: string, url: string, popularity: number, poll: Poll) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.url = url;
    this.popularity = popularity;
    this.poll = poll;
  }
}

export class Poll {
  good: number;
  bad: number;

  constructor(good: number, bad: number) {
    this.good = good;
    this.bad = bad;
  }
}
