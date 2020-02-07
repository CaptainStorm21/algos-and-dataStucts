//call() --- 
//apply()



const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
  }
};
 
const car2 = {
  brand: 'Lamborghini'
};
 
const car3 = {
  brand: 'Ford'
};
 
car1.getCarDescription(80000, 2010, 'blue');

//call ---- takes the function arguments separately
car1.getCarDescription.call(car2, 200000, 2013, 'yellow');
// apply() takes an array as its second argument and 
// passes the members of that array as //arguments
car1.getCarDescription.apply(car3, [35000, 2012, 'black']);
