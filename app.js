const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
let students=[];
if(localStorage.students!= null){
    students=JSON.parse(localStorage.students);
    show(); 
}
  function Student(userName,datee ,gender,majer,img,pnumber,grade) {
  this.userName = userName; 
  this.datee = datee;
  this.gender = gender;
  this.majer = majer;
  this.img = img;
  this.pnumber = pnumber;
  this.grade = grade;
}
let form=document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
let username=e.target.username.value;
let datee=e.target.Dateofbirth.value; 
let gender=e.target.gender.value;
let majer=e.target.major.value;
let img=e.target.img.value;
let pnumber=e.target.phonenumber.value;
let grade=e.target.grade.value;
  let student = new Student (username,datee ,gender,majer,img,pnumber,grade);
     students.push(student);
     localStorage.setItem('students',JSON.stringify(students) );
// Write(username,datee,gender,pnumber,grade)
  show();
  form.reset();
});




// function Write  (username,datee,gender,pnumber,grade) {
// let tr=document.createElement("tr");
// let td1 =document.createElement("td");
// let td2=document.createElement("td");
// let td3=document.createElement("td");
// let td4=document.createElement("td");
// let td5=document.createElement("td");
// td1.textContent=username;
// td2.textContent= datee;
// td3.textContent= gender;
// td4.textContent= pnumber;
// td5.textContent= grade;
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// tr.appendChild(td4);
// tr.appendChild(td5);
// let table = document.getElementById('table');
// table.appendChild(tr);
// }


function show(){
  for(let i=0;i<students.length;i++){

    let card= document.getElementById("card");
    let divContainer = document.createElement('div');
    let imgg = document.createElement('img');
    imgg.src=`${students[i].img}`;
    imgg.style.width="250px";
    img.style.height="250px";
    let p1= document.createElement("p");
    let p2= document.createElement("p");
    let p3= document.createElement("p");
    let p4= document.createElement("p");
    let p5= document.createElement("p");
    p1.textContent=`Name: ${students[i].userName} `;
    p2.textContent=`Date of birth: ${students[i].datee}`;
    p3.textContent=` Gender:${students[i].gender}`;
    p4.textContent=`Major: ${students[i].majer}`;
    p5.textContent=` Phone number :${students[i].pnumber}`
    divContainer.appendChild(imgg);
    divContainer.appendChild(p1);
    divContainer.appendChild(p2);
    divContainer.appendChild(p3);
    divContainer.appendChild(p4);
    divContainer.appendChild(p5);
    card.appendChild(divContainer);
  }
}
