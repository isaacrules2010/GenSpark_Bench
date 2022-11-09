"use strict";
class Warehouse {
    get stock() {
        return this._stock;
    }
    set stock(newStock) {
        this._stock = newStock;
    }
    toString() {
        return '[Name: ' + this._stock.name + ', Quantity: ' + this._stock.quantity + ']';
    }
}
let newItem = { name: "Television", quantity: 10 };
let myWarehouse = new Warehouse();
myWarehouse.stock = newItem;
console.log(myWarehouse.toString());
//# sourceMappingURL=warehouse.js.map