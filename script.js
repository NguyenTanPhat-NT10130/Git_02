class Vendor {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class ShopVegetable {
    /**
     * 
     * @param {string} name 
     * @param {number} price 
     * @param {*number} stock 
     * @param {string} unit 
     * @param {vendor} vendor 
     */
    constructor(name, price, stock, unit, vendor) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.unit = unit;
        this.vendor = vendor;
    }


    calcTotalPrice() {
        return this.price * this.stock;
    }
}

class Shop {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.items = [];
        this.vendors = [];
    }

    registerVendor(name, address) {
        this.vendors.push(new Vendor(name, address));
    }

    registerItem(name, price, stock, unit, vendorName) {
        let foundVendor = this.vendors.find((vendor) => vendor.name === vendorName);
        if (foundVendor === undefined) {
            throw new Error("Vendor not found");
        }
        this.items.push(new ShopVegetable(name, price, stock, unit, foundVendor));
    }
    getItems() {
        return this.items;
    }
    getVendor() {
        return this.vendor;
    }

    buyItem(itemName, qty) {
        let foundItem = this.items.find((item) => item.name === itemName);
        if (foundItem == undefined) {
            throw new Error(`Item ${itemName} is not found`);
        }
        if (qty > foundItem.stock) {
            throw new Error("Out of stock");
        }
        foundItem.stock -= qty;
        return new ShopVegetable(foundItem.name, foundItem.price, qty, foundItem.vendor);
    }

}


let myShop = new Shop("My Shop", "123 Main St");
myShop.registerVendor("Apple", "123 Apple St");
myShop.registerVendor("Bananas", "123 Bananas St");
myShop.registerVendor("Oron", "123 Oron St");

myShop.registerItem("Tao", 1000, 10, "trai", "Apple");
myShop.registerItem("Chuoi", 500, 10, "trai", "Bananas");
myShop.registerItem("Cam Thai Lan", 5000, 10, "qua", "Oron");

let ShopVegetable1= new ShopVegetable("Tao", 1000, 10, "trai", "Apple");
console.log(...myShop.getItems());

let my_Vegetable = myShop.buyItem("Tao", 3);

console.log(my_Vegetable);
console.log(ShopVegetable1.calcTotalPrice())
console.log(myShop.getItems());

function createNewItemHtml(ShopVegetable) 
{
    return ` <ol style="display:flex ;">
    <li>
        <div class="container">
            <div class="card">
              <div class="imgBx">
                <img src="https://th.bing.com/th/id/OIP.9OlVv3_y54svTmJ8YZ10NwHaE7?pid=ImgDet&rs=1">
              </div>
              <div class="contentBx">
                <h2 style="margin-top:15px">America Apple</h2>
                <div class="Size">
                  <h3>Price :<span>1000</span></h3>
                  
                  
                </div>
                
                  <h3>description :<span>It's good for people</span></h3>
                                 
                <a href="#">Buy Now</a>
              </div>
            </div>
          </div>
    </li>
</ol>
`
}

