let form = document.querySelector("form");
let username = document.querySelector(".username");
let imgUrl = document.querySelector("#imgurl");
let title = document.querySelector("#title");
let job = document.querySelector("#job");
let description = document.querySelector("#description");
let date = document.querySelector("#date");
const btn = document.querySelector(".register__btn");
let getImg = document.querySelector(".getImg");
let name = document.querySelector(".name");
let getdate = document.querySelector(".getDate");
let getjob = document.querySelector(".getJob");
let getAbout = document.querySelector(".getAbout");
let data=[];
imgUrl.addEventListener("input", () => {
  getImg.src = imgUrl.value;
});
title.addEventListener("input", () => {
  name.textContent = title.value;
});
job.addEventListener("input", () => {
  getjob.textContent = job.value;
});
date.addEventListener("input", () => {
  getdate.textContent = date.value;
});
description.addEventListener("input", () => {
  getAbout.textContent = description.value;
});


const getUserData = JSON.parse(localStorage.getItem("userdata"));
username.addEventListener("input", ()=>{
    
    // getUserData[0].textContent==username.value;
    username.textContent =  getUserData[0]
});


btn.addEventListener("click", (nimadir) => {
  nimadir.preventDefault();
  if (imgUrl.value && title.value && job.value && date.value && description.value) {
    
      data.push({title: title.value, img: imgUrl.value});
      localStorage.setItem("projectdata", JSON.stringify(data));
      window.location.href = "./main.html";
    
  } else alert("hamma inputlarni to'ldiring !");
});

console.log(window.location);

