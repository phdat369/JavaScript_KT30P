//câu 1
let n = 20;
if (n%2===0) {
    console.log(`Số ${n} là số chẵn`);
}
else {
    console.log(`Số ${n} là số lẻ`);
}
if (n>0) {
    for(let i = 1 ;i<=n ;i++) {
        console.log(i);
    }
}
else {
    console.log("Giá trị n không hợp lệ để tạo dãy số");
}
//câu 2
let sum =0;
for (let j = 1 ; j<=50 ; j++) {
    if (j%3===0 && j%5===0) {
        console.log("FizzBuzz");
    }
    else if (j%3===0) {
        console.log("Fizz");
        sum+=j;
    }
    else if (j%5===0) {
        console.log("Buzz");
    }
    else {
        console.log(j);
    }
}
console.log("Tổng của các số đã in ra chữ Fizz là : ",sum);
