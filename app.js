var itemArray = [
    {
        name: "juice",
        price: "50",
        quantity: "3",
    },
    {
        name: "cookie",
        price: "30",
        quantity: "9",
    },
    {
        name: "shirt",
        price: "880",
        quantity: "1",
    },
    {
        name: "pen",
        price: "100",
        quantity: "2",
    }
]

var cal1 = (itemArray[0].price * itemArray[0].quantity);
var cal2 = (itemArray[1].price * itemArray[1].quantity);
var cal3 = (itemArray[2].price * itemArray[2].quantity);
var cal4 = (itemArray[3].price * itemArray[3].quantity);

var allItems = (cal1 + cal2 + cal3 + cal4);

 console.log(cal1);
 console.log(cal2);
 console.log(cal3);
 console.log(cal4);
console.log("total" , allItems);


var obj = {
    name: "sakib",
    email: "sakibsiddiqui787@gmail.com",
    password: "12345",
    age: 17,
    gender: "Male",
    city: "Karachi",
    country: "pakistan",
}

if("age" in obj && "country" in obj === true){
    console.log("Yes age and country properties exist in obj");
} else{
    console.log("Not found");
}



function Jay(first, last, age, country){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.country = country;
}

const introSakib = new Jay("sakib ", "siddiqui", 20, "Pakistan");
const introUmair = new Jay("umair", "nadir", 18, "Pakistan");
const introJibran = new Jay("jibran", "saleem", 24, "Pakistan");

console.log(introSakib);
console.log(introUmair.age);
console.log(introJibran);


// function Area(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// }

// function myfun() {
//     var personName = document.getElementById("name").value;
//     var address = document.getElementById("address").value;
//     var education = document.getElementById("education").value;
//     var profession = document.getElementById("profession").value;

//     if ((personName.length && address.length && education.length && profession.length) == 0) {
//         console.log("Please fill all the field correctly");
//     } else {
//         var gender1 = document.getElementById("male");
//         var gender2 = document.getElementById("female");

//         if (gender1.checked) {
//             var a = "male";
//         } else if (gender2.checked) {
//             var a = "female";
//         }

//         const myArea = new Area(name, a, address, education, profession);
//         console.log(myArea);
//     }
// }

    
    