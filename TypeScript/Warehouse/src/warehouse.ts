interface Item{
    name:string;
    quantity:number;
}

class Warehouse{
    private _stock:any;

    public get stock():Item{
        return this._stock;
    }

    public set stock(newStock:Item){
        this._stock = newStock;
    }

    public toString(){
        return '[Name: '+this._stock.name+', Quantity: '+this._stock.quantity+']';
    }
}

let newItem:Item = {name:"Television", quantity:10};
let myWarehouse = new Warehouse();

myWarehouse.stock = newItem;
console.log(myWarehouse.toString());