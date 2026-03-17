let inputName = document.getElementById("contact-name");
let inputPhone = document.getElementById("contact-phone");
let inputEmail = document.getElementById("contact-email");
let btnAdd = document.getElementsByTagName("button")[0];
let tbody = document.getElementById("contact-tbody");
localStorage.setItem("count" , 5) ;
const adddProfile = () => {
    let valueName = inputName.value;
    let valuePhone = inputPhone.value;
    let valueEmail = inputEmail.value;
    
    if(valueName == "") {
        alert("Họ tên không được để trống")
        return;
    }
    else if (valueName.length < 2) {
        alert("Họ tên phải có ít nhất 2 ký tự");
        return;
    }
    for(let char of valueName) {
        if(!isNaN(char)) {
            alert("Tên không chứa kí tự đặc biệt")
        }
    }
    
    if(valuePhone == "") {
        alert("Số điện thoại không được để trống");
        return;
    }
    else if (valuePhone.length != 10 ) {
        alert("Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại 10 chữ số (bắt đầu bằng 0) hoặc định dạng quốc tế (+84...)")
    }
    let tr = document.createElement("tr");
    let count = localStorage.getItem("count");
    let plusCount = +count + 1;
    localStorage.setItem("count", plusCount);
    tr.innerHTML = `
    <tr>
        <td>${plusCount}</td>
        <td>${valueName}</td>
        <td>${valuePhone}</td>
        <td>${valueEmail}</td>
        <td>
            <div class="action-buttons">
                <button class="btn-edit">Sửa</button>
                <button class="btn-delete">Xóa</button>
            </div>
        </td>  
    </tr>`
    tbody.appendChild(tr);
    inputName.value = "";
    inputPhone.value = "";
    inputEmail.value = "";
}
btnAdd.addEventListener("click" , adddProfile);