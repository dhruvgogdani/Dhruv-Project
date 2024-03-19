
let data = [];
const viewdata = () => {
    let val = JSON.parse(localStorage.getItem('data'))
    let tbl = "";
    for (let i in val) {
        tbl += `
                 <tr>
                     <td class="px-5">${val[i].userid}</td>
                     <td class="px-5">${val[i].username}</td>
                     <td class="px-5">${val[i].useremail}</td>
                      <td><button class="btn btn-danger px-3" onclick="del(${val[i].userid})">Delete</button>
                       <button type="button" class="btn btn-primary px-5" onclick="editdata(${val[i].userid})" data-bs-toggle="modal" data-bs-target="#myModal">
                          Edit
                          </button>
                 </tr>
`
    };
    document.getElementById('tbb').innerHTML = tbl;
}
viewdata();

let saves = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let obj = {
        userid: Math.floor(Math.random() * 1000),
        username: name,
        useremail: email,
        userpassword: password
    }
    if (localStorage.getItem('data') === null || localStorage.getItem('data') === undefined) {
        data.push(obj);
        localStorage.setItem('data', JSON.stringify(data));
    }
    else {
        let val1 = JSON.parse(localStorage.getItem('data'));
        val1.push(obj);
        localStorage.setItem('data', JSON.stringify(val1));
    }
    viewdata();

}

let del = (userid) =>{
    let va = JSON.parse(localStorage.getItem('data'));
    va.map((v)=>{
           //  return v.userid != userid;
           if(v.userid== userid){
                 va.splice(v,1)
           }
           localStorage.setItem('data',JSON.stringify(va))
    });
    viewdata();
}

let editdata = (userid) => {
    document.getElementById('save').style.display = "none";
    document.getElementById('ed').style.display = "block";
    let upd = JSON.parse(localStorage.getItem('data'));
    upd.map((v) => {
      if (v.userid == userid) {
        document.getElementById('id').value = userid;
        document.getElementById('name').value = v.username;
        document.getElementById('email').value = v.useremail;
        document.getElementById('password').value = v.userpassword;

      }
    })
  }

  let edits = () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let edi = JSON.parse(localStorage.getItem('data'));
    edi.filter((v) => {
      if (v.userid == id) {
        v.username = name;
        v.useremail = email;
        v.userpassword = password;
      }
    })
    localStorage.setItem('data', JSON.stringify(edi));
    document.getElementById('id').value = "";
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";

    viewdata();
  }