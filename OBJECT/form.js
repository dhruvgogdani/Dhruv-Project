
let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let submitbtn = document.getElementById("submitbtn");
let cancelbtn = document.getElementById("cancelbtn")
let table = document.getElementById("tbb")

let obj;
// nameInput.value ="ncjgj"
let selectid = true;

cancelbtn.addEventListener("click", () => {
    nameInput.value = "";
    emailInput.value = ""; 
    passwordInput.value = ""; 
    selectid = true;
  });


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let nameValue = nameInput.value;
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;
    
    if(selectid === true){
    obj = {
        id:Date.now(),
        name: nameValue,
        email: emailValue,
        password: passwordValue
    };

    display(obj);  
    }else{
         updateRow(selectid,nameValue,emailValue,passwordValue)
    } 
    // else if (update()){
    //     window.alert("Id is not exist")
    // }    
    form.reset();
    selectid = true;
});

let rowId =  obj;

function display(dataObj) {
    // console.log('dataObj :>> ', dataObj.id);
    console.log('dataObj :>> ', dataObj);
    

    table.innerHTML += "<tr id = "+dataObj.id+"><td>" + dataObj.id + "</td>" + "<td>" + dataObj.name + "</td>" + "<td>" + dataObj.email + "</td>" + "<td>" + dataObj.password + "</td>" + "<td> <button onclick = update("+dataObj.id+")>update</button>" + "</td>" +  "<td> <button onclick =Delete("+dataObj.id+")>Delete</button>" + "</td>" +"</tr>" 

    // table.innerHTML += "<tr id=" + dataObj.id + ">" +
    // "<td>" + dataObj.id + "</td>" +
    // "<td>" + dataObj.name + "</td>" +
    // "<td>" + dataObj.email + "</td>" +
    // "<td>" + dataObj.password + "</td>" +
    // "<td> <button onclick='update(" + JSON.stringify(dataObj) + ")'>update</button>" + "</td>" +
    // "<td> <button onclick='deleteItem(" + dataObj.id + ")'>Delete</button>" + "</td>" +
    // "</tr>";

};


function Delete(rowId) {
    // document.getElementById(rowId).remove();
    // console.log('nbhyucscvsic :>> ', rowId);
    let row =document.getElementById(rowId);
    if(row){
        row.remove();
    }
};
  
function updateRow(rowId,newName,newEmail,newPassword) {
    let row = document.getElementById(rowId);
    //   row = row.children


    if(row){
        let columns = row.children

        columns[1].innerText = newName;
        columns[2].innerText = newEmail;
        columns[3].innerText = newPassword;
    }
};


function update(rowId) {
 console.log("update",rowId);
 selectid = rowId;

  let row = document.getElementById(rowId);
   if (row) {
    let columns = row.children;
    // let id = columns[0].innerText;  
    let name = columns[1].innerText;
    let email = columns[2].innerText;
    let password = columns[3].innerText;
    
    
    nameInput.value = name;
    emailInput.value = email;
    passwordInput.value = password;

}

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         // const element = object[key];
//         if()
//         console.log('key :>> ', obj[key]);
        
//     }
// }

 
//  document.getElementById("1698120799404").children[1].innerText

//  for (let i = 0; i < obj; i++) {
//     // const element = array[i];
    
//  }

//  if(obj.name = nameInput){
//    nameInput.value = ""
//    console.log(' bkjgi:>> ');
//  }


//  for (const key in newdata) {
//     // if (Object.hasOwnProperty.call(object, key)) {
//     //     const element = object[key];
        
//     // }
//     console.log('key :>> ', newdata[key]);
//  };



    // if(nameValue){
    //     nameInput.value = ""
    //     console.log('nammmmmmmmmmmmmmm :>> ');
    // }
    // else if(newEmail){
    //     emailInput.value = ""
    // }else if(newPassword){
    //     passwordInput.value  = ""
    // }
    // columns[1].innerText = newName;
    // columns[2].innerText = newEmail;
    // columns[3].innerText = newPassword;
    
};