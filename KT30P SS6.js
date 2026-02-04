//câu 1
let string = "Quý,Nam,Lan,Hùng,Nam";
let students = string.split(",");
students.reverse(); // phương thức này không làm thay đổi mảng gốc
if (students.includes("Lan")) {
    console.log("Tên Lan tồn tại trong mảng");
}
else {
    console.log("Tên Lan không tồn tại trong mảng");
}
console.log("Vị trí đầu tiên của tên Nam trong mảng");

let index = students.indexOf("Nam");
console.log(index);
//câu 2
console.log("Các phần tử trong mảng");
let price = [100,200,300,400];
for (let element of price) {
    console.log(element);
}
console.log("Các vị trí index trong mảng");

for (let index in price) {
    console.log(index);
}
let sum=0;
for(let i = 0 ; i< price.length-1 ; i++) {
    if (i%2 ===0 ) {
        sum+=price[i];
    }
}
console.log("Tổng của các index chẵn: ",sum);
