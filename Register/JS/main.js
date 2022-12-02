let username = document.querySelector(".username");
let userdata = JSON.parse(localStorage.getItem("userdata"));
let deleteAccountBtn = document.querySelector(".deleteAccountBtn");
let logOut = document.querySelector(".logOut");
let projects = document.querySelector(".projects");
deleteAccountBtn.addEventListener("click", () => {
  localStorage.clear();
  location.href = "./index.html";
});

logOut.addEventListener("click", () => {
    window.location.href = "./index.html";
});
deleteAccountBtn.addEventListener("click",()=>{
    localStorage.clear();
    window.location.href = "./index.html";
});
projects.addEventListener("click", () => {
    window.location.href = "./projects.html";
});
const getUserData = JSON.parse(localStorage.getItem("userdata"));
    
    // getUserData[0].textContent==username.value;
    username.textContent =  getUserData[0]

let projectData = JSON.parse(localStorage.getItem("projectdata"));
username.textContent = userdata?.username;

projectData.map((proj) => {
  let project = document.createElement("div");
  project.className = "project";
  project.style.backgroundImage = `linear-gradient(to right bottom, #a03bff, #a03bff50), url(${proj.img})`;
  project.textContent = proj.title;
  projects.appendChild(project);
});
