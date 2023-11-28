let measurement = "кілограми"; 
let quantity = 10; 
let meters = quantity * 1000;
let grams = quantity * 1000;
let minutes = quantity * 60;

switch (measurement) {
case "кілометри":
    console.log(quantity + " кілометрів це " + meters + " метрів");
 break;
case "кілограми":
    console.log(quantity + " кілограм це " +grams + " грам");
 break;
case "години":
    console.log( quantity + " годин це " + minutes + " хвилин");
 break;
    default:
    console.log("Введіть кількість та одну з цих одиниць виміру: кілограми, години, кілометри.");
}