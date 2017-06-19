// class
  //    a nicer way to make constructor functions and protoypes

// // -------- using constructor and protoypes --------
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }
//
// function Electronic (name, price, brand) {
//   Product.call(this, name, price);
//   this.brand = brand;
// }
//
// Product.prototype.priceAfterTax = function() {
//   return this.price * 1.07;
// };
//
// Electronic.prototype = Object.create(Product.prototype);

// ---------  using classes --------------

class Product {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  }
  priceAfterTax() {
    return this.price * 1.07;
  }
}

class Electronic extends Product {
  constructor (name, price, brand) {
    // invoke constructor() of product class
    super(name, price);
    this.brand = brand;
  }
}


var myEcho = new Electronic('Echo Dot', 179.99, 'Amazon');

var myBlanket = new Product('Heated Blanket', 42.95);

var myStick = new Electronic('Fire Stick', 29.99, 'Amazon');

console.log(myEcho.priceAfterTax());
console.log(myBlanket.priceAfterTax());
console.log(myStick.priceAfterTax());
