let products = [
    { id: "P01", name: "Laptop Macbook Pro M3", price: 2000, category: "Laptop", inStock: true},
    { id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true},
    { id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false},
    { id: "P04", name: "Màn hình Dell UltraSharp", price: 450, category: "Màn hình", inStock: true},
    { id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true},
]
const filterProducts = (products,search) => {
    let searchArray = products.filter((element) => {
        return element.id == search;
    });
    if(searchArray.length >0) {
        searchArray.forEach((element) => {
            console.log(element);
            
        });
    }
    else {
        console.log("Không tìm thấy sản phẩm");
    } 
}
filterProducts(products,"P00");
const checkProducts = (products) => {
    let check = products.every((element) => {
        return element.price > 0;
    });
    if(check) {
        console.log("Dữ liệu bảng giá hợp lệ");
    }
    else {
        console.log("Phát hiện sản phẩm chưa cập nhật giá"); 
    }
}
checkProducts(products);
const displayProducts = (products) => {
    let catalogDisplay = [];
    products.forEach((element) => {
        if(element.inStock == true) {
            element.inStock = "Còn hàng";
        }
        else if(element.inStock == false) {
            element.inStock = "Hết hàng";
        }
        catalogDisplay.push(`${element.name} - Giá: ${element.price} | Trạng thái: ${element.inStock}`);
    });
    console.log(catalogDisplay);
}
displayProducts(products);

