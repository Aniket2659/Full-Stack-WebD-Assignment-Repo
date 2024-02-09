const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// Adding "Meat" if not present in the shoppingCart.
console.log(shoppingCart);
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

// Add "Sugar" in the shopping cart if Not present.
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

// remove Honey if you are allergic to Honey
let tempindex1 = shoppingCart.indexOf("Honey");
shoppingCart.splice(tempindex1, 1);
console.log(shoppingCart);

// modify Tea to "Green Tea";
let tempindex2 = shoppingCart.indexOf("Tea");
shoppingCart.splice(tempindex2, 1, "Green Tea");
console.log(shoppingCart);
