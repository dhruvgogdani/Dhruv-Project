// let std = [
//     { en: 52, name: "aasss", dep: "bca", mob: 8888888888 },
//     { en: 53, name: "fgf", dep: "bca", mob: 8888888888 },
//     { en: 52, name: "aasfgjss", dep: "bca", mob: 8888888888 },
//     { en: 55, name: "sf", dep: "bca", mob: 8888888888 },
//     { en: 75, name: "cvbcv", dep: "bca", mob: 8888888888 },
//     { en: 82, name: "avncvnvasss", dep: "bca", mob: 8888888888 },
//     { en: 59, name: "nvcn", dep: "bca", mob: 8888888888 },
//     { en: 61, name: "av cvnnasss", dep: "bca", mob: 8888888888 },
//     { en: 62, name: "aascvxbbvss", dep: "bca", mob: 8888888888 },
//     { en: 63, name: "xcvbvbc", dep: "bca", mob: 8888888888 },
//     { en: 64, name: "cvnxvccvn", dep: "bca", mob: 8888888888 },
//     { en: 65, name: "cncvnv", dep: "bca", mob: 8888888888 },
//     { en: 66, name: "vnvncv", dep: "bca", mob: 8888888888 },
//     { en: 67, name: "bvcnbvnv", dep: "bca", mob: 8888888888 },
//     { en: 68, name: "cvbnvbn", dep: "bca", mob: 8888888888 },
//     { en: 69, name: "bvcnvn", dep: "bca", mob: 8888888888 },
//     { en: 70, name: "bvnvvb", dep: "bca", mob: 8888888888 },

//   ];

//   // insertStudent({en:85,name"sddgdg",dep:"sdgsd",mob:45637547537})
//   // updateStudent({en:63,name"sddgdg",dep:"sdgsd",mob:45637547537})
//   // delteStudent(66)
//   // getStudent(70)

let information = [
  { id: 11, name: "Harsh", dep: "bca", mob: 9876543210 },
  { id: 12, name: "Keyur", dep: "bcom", mob: 9876543851 },
  { id: 13, name: "Dixit", dep: "bba", mob: 9876543451 },
  { id: 14, name: "Dhruv", dep: "bca", mob: 9876543211 },
  { id: 15, name: "Digant", dep: "bscit", mob: 9876543220 },
  { id: 16, name: "Deep", dep: "ba", mob: 9876543800 },
  { id: 17, name: "Sujal", dep: "bca", mob: 9876543000 },
];

console.log("information :>> ", information);

// INSERT
// function insert(array,obj) {
//     array.push(obj);
// };

// insert(information,{id:1300, name:"gopal", dep:"mba", mob:9876543841});

// console.log('Inserted  information:>> ',information );

function insert(...information) {
  console.log("information :>> ", information);
}
insert(
  ...information,
  { id: 1300, name: "gopal", dep: "mba", mob: 9876543841 },
  { id: 1400, name: "vishal", dep: "ca", mob: 9876545441 },
  { id: 1500, name: "jay", dep: "mba", mob: 9812543841 },
  { id: 1600, name: "nayan", dep: "bba", mob: 9876512841 }
);

// //UPDATE

// function update(array, id, obj) {
//   const newUpdate = array.map((item) => {
//     if (item.id == id) {
//       item = obj;
//     }
//     return item;
//   });
//   // for (let i = 0; i < array.length; i++) {
//   //     // const element = array[i];
//   //     if(array[i] == id){
//   //         id = obj
//   //     }

//   // }
//   console.log(" newUpdate:>> ", newUpdate);
// }

// update(information, 14, {
//   id: 14,
//   name: "Mayur",
//   dep: "emp monitor",
//   mob: 1234567890,
// });

function update(value){
  for (let i = 0; i < information.length; i++) {
    // const element = array[i];
    if(information[i].id == value.id){
      information[i] = value;
    }
    
  }
  console.log('information updateupdateupdateupdateupdateupdate :>> ', information);
};

update({
    id: 14,
    name: "Mayur",
    dep: "emp monitor",
    mob: 1234567890,
  });

// function update(array, id, obj) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].id == id) {
//             array[i] = obj;
//         }
//     }
//     console.log('Updated information', array);
// };

// update(information, 14, { id: 14, name: "Mayur", dep: "emp monitor", mob: 1234567890 });

//DELETE

// function deleteObj(array,id) {
//     for (let i = 0; i < array.length; i++) {
//         // const element = array[i];
//         if(array[i].id == id){
//            return delete array[i];
//         };

//     }
// };
// deleteObj(information,12);
// console.log('Deleted  information :>> ', information);

function deleteObj(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == id) {
      array.splice(i, 1);
    }
  }
}

deleteObj(information, 16);
console.log("Deleted information: ", information);

//DISPLAY

// function display(array, id) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].id === id) {
//       console.log("Details of this id " + id + ":", array[i]);
//       return;
//     } else {
//       console.log("Please enter a valid id " + id);
//     }
//   }
// };
// display(information,15);


function display(id) {
  for (let i = 0; i < information.length; i++) {
    console.log('information[i] :>> ', information[i]);
    if (information[i].id === id) {
      console.log("Display" + id + ":", information[i]);
      return;
    }
  }
  console.log("Please enter a valid id " + id);
}

display(15);



//FILTER


// for (let i = 0; i < information.length; i++) {
//   // const element = array[i];
//   if(information[i].dep === "bca"){
//     console.log('information[i] :>> ', information[i]);
//   }
  
// }

function getValue(dep) {
  let newa = information.filter((item)=>{
    return item.dep === dep;
  });
  console.log('information[i] :>> ', newa);
};

getValue("bca");


// let newAf = information.filter((item)=>{
//   return item === information[dep.value]
// });

// console.log('newAf :>> ', newAf);

