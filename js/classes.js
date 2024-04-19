class PRODUCTS {
  constructor(id, quentity, unit, img) {
    this.id = id;
    this.quentity = quentity;
    this.unit = unit;
    this.img = img;
  }
}

export class things extends PRODUCTS {
  constructor(id, quentity, unit, img, name, price) {
    super(id, quentity, unit, img);
    this.name = name;
    this.price = price;
  }
}
