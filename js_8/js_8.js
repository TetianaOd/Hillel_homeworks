

//1

var myCity = {
    name: "Odesa",
    beautiful: true,
    age: 608,

getInfo: function () {
    for (let property in this) {
    if (typeof this[property] !== "function") {
    console.log(`${property}: ${this[property]}`);
    }
  }
 }
};

myCity.getInfo();
myCity.newProperty = "manyTouristAttractions: true";
myCity.getInfo();



//2

/*
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};


services['Розбити скло'] = "200 грн";

var salon = {
    services: services,

    
    price: function () {
        let total = 0;
        let serviceKeys = Object.keys(this.services);
        for (let i = 0; i < serviceKeys.length; i++) {
            total += parseInt(this.services[serviceKeys[i]]);
        }
        return total;
    },


    minPrice: function () {
        let prices = Object.values(this.services).map(price => parseInt(price));
        let min = prices[0];
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < min) {
                min = prices[i];
            }
        }
        return min;
    },

    maxPrice: function () {
        let prices = Object.values(this.services).map(price => parseInt(price));
        let max = prices[0];
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > max) {
                max = prices[i];
            }
        }
        return max;
    }
};

console.log("Загальна вартість: " + salon.price() + " грн");
console.log("Мінімальна вартість " + salon.minPrice() + " грн");
console.log("Максимальна вартість: " + salon.maxPrice() + " грн");


*/