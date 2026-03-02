let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{ id: "P02", name: "Chuot khong day Logitech", price: 45, category: "Phu kien", inStock: true },
{ id: "P03", name: "Ban phim Co Keychron", price: 95, category: "Phu kien", inStock: false },
{ id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phu kien", inStock: true },
]

const filterSortProducts = (products) => {
    let inStockProducts = products.filter((product) => {
        return product.inStock == true;
    });
    let sortPrice = inStockProducts.sort((a,b) => {
        return b.price - a.price
    });
    console.log(sortPrice);
    
}
filterSortProducts(products); 


const filterCategory = (products) => {
    let newCategory = products.filter((element) =>{
        return element.category == "Phu kien";
    });
    let nameCategory = newCategory.map((product) => {
        return product.name;
    });
    console.log(nameCategory);
}
filterCategory(products);


const sumPrice = (products) => {
    let newInStock = products.filter((product) => {
        return product.inStock == true;
    });
    let totalPrice = newInStock.reduce((acc,crr) => {
        return acc += crr.price
    },0);
    console.log(totalPrice);
}
sumPrice(products);


