const btn = document.querySelector(".register__btn");
const userName = document.querySelector(".username");
const password = document.querySelector(".password");
const email = document.querySelector(".email");
const confirm = document.querySelector(".confirm");
let data = [];

// btn click event
btn.addEventListener("click", (nimadir) => {
  nimadir.preventDefault();
  if (userName.value && password.value &&email.value) {
    if (password.value == confirm.value) {
      data.push(userName.value, password.value, email.value);
      localStorage.setItem("userdata", JSON.stringify(data));
      window.location.href = "./main.html";
    } else alert("parollar mos emas");
  } else alert("hamma inputlarni to'ldiring !");
});

console.log(window.location);


