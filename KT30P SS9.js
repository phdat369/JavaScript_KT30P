let order = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "ĐƠn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];
let orderReports =[];
for (let i=0 ;i<order.length;i++) {
    orderReports.push(`${order[i]} mang về ${revenues[i]} USD`);
}
console.log(orderReports);
let doanhthu = revenues.filter((money) => {
    return money>0;
});
let sumMoney = doanhthu.reduce((gia_tri_ban_dau,gia_tri_hien_tai) => {
    return gia_tri_ban_dau+=gia_tri_hien_tai;
},0)
console.log(sumMoney);
