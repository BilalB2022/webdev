console.log("hello world");
var company; //undifined
console.log(company);
company = "intec";
console.log(company);
var username = document.getElementById("username");
username.innerText = "sami";
username.style.color = "red";

const divi = document.createElement("div");
const para = document.createElement("p");
const textPara = document.createTextNode("Hi, i'm a paragraph");
para.appendChild(textPara);
divi.appendChild(para);
username.after(divi);

var student1 = "Ali et",
  student2 = "Kelly";
console.log(student1, student2);

// diffence betweeen var and let =
// let can't be redeclare and var is free

// const can't be undifenid and can not be changed
