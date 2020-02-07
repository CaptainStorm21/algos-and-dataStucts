var house = {
  price: 10000,
  squareFeet: 200,
  owner:'Taylor',
  getPricePerSquare: function () {
        return this.price/this.squareFeet
    // return house.price/house.squareFeet
  }
}

console.log(house.price);
console.log(house.getPricePerSquare())

//'this'
//this is a direct object inside of the container
//this refers to the objec that is in the conetext of
