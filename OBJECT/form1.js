let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let submitbtn = document.getElementById("submitbtn");
let cancelbtn = document.getElementById("cancelbtn");
let table = document.getElementById("tbb");

let obj;
let selectedRowId = null;


cancelbtn.addEventListener("click", () => {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    selectedRowId = null; // Reset
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let nameValue = nameInput.value;
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;
    
    if (selectedRowId === null) {
        obj = {
            id: Date.now(),
            name: nameValue,
            email: emailValue,
            password: passwordValue
        };
        display(obj);
        console.log('obj :>> ', obj);
    }else{
        updateRow(selectedRowId, nameValue, emailValue, passwordValue);
    }


    form.reset();
    selectedRowId = null; // Reset 
});

function display(dataObj) {
    table.innerHTML +=
        "<tr id=" + dataObj.id + ">" +
        "<td>" + dataObj.id + "</td>" +
        "<td>" + dataObj.name + "</td>" +
        "<td>" + dataObj.email + "</td>" +
        "<td>" + dataObj.password + "</td>" +
        "<td> <button onclick=update(" + dataObj.id + ")>Edit</button>" + "</td>" +
        "<td> <button onclick=Delete(" + dataObj.id + ")>Delete</button>" + "</td>" +
        "</tr>";
};

function Delete(rowId) {
    let row = document.getElementById(rowId);
    row.remove();
    
};

function updateRow(rowId, newName, newEmail, newPassword) {
    let row = document.getElementById(rowId);
    console.log('row :>> ', row);
    if (row) {
        let columns = row.children;
        console.log('columns :>> ', columns);
        columns[1].innerText = newName;
        columns[2].innerText = newEmail;
        columns[3].innerText = newPassword;
    }
}

function update(rowId) {
    selectedRowId = rowId;
    let row = document.getElementById(rowId);
    if (row) {
        let columns = row.children;
        let name = columns[1].innerText;
        let email = columns[2].innerText;
        let password = columns[3].innerText;

        nameInput.value = name;
        emailInput.value = email;
        passwordInput.value = password;
    }
}