const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

let form=document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
let username=e.target.username.value;
let datee=e.target.Dateofbirth.value; 
let gender=e.target.gender.value;
let pnumber=e.target.phonenumber.value;
let grade=e.target.grade.value;
Write(username,datee,gender,pnumber,grade)
form.reset();
});
function Write  (username,datee,gender,pnumber,grade) {
let tr=document.createElement("tr");
let td1 =document.createElement("td");
let td2=document.createElement("td");
let td3=document.createElement("td");
let td4=document.createElement("td");
let td5=document.createElement("td");
td1.textContent=username;
td2.textContent= datee;
td3.textContent= gender;
td4.textContent= pnumber;
td5.textContent= grade;
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);
let table = document.getElementById('table');
table.appendChild(tr);
}
form.reset();