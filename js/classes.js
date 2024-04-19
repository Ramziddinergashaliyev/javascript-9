class PRODUCTS {
  constructor(id, quentity, unit, img) {
    this.id = `${new Date().getTime}`;
    this.quentity = quentity;
    this.unit = unit;
    this.img = img;
  }
}

export class things extends PRODUCTS {
  constructor(id, img, quentity, unit, price, name) {
    super(id, quentity, unit, img);
    this.name = name;
    this.price = price;
  }
}
