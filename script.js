
function pizzaOven(crust, sauce, cheese, toppings) {
    var Pizza = {};
    Pizza.crustType = crust;
    Pizza.sauceType = sauce;
    Pizza.cheeses = cheese;
    Pizza.toppings = toppings;
    return Pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni","sausage"]);
console.log(p1);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushroom","olices","onions"]);
console.log(p2);
var p3 = pizzaOven("cheese stuffed", "white sauce", "mozzarella", ["garlic","anchovies"]);
console.log(p3);
var p4 = pizzaOven("gluten free", "buffalo", "bleu", ["onions","jalapeno"]);
console.log(p4);