const btn2 = document.querySelector(".login__btn");
const userName2 = document.querySelector(".login__username");
const password2 = document.querySelector(".login__password");

// btn click event
// btn2.addEventListener("click", (e) => {
//   e.preventDefault();
//   const getUserData = JSON.parse(localStorage.getItem("userdata"));
//   if (!getUserData) return alert("siz ro'yhatdan o'tmagansiz !");
//   if (userName2.value && password2.value) {
//     if (userName2.value == getUserData[0] && password2.value == getUserData[1]) {
//       window.location.href = "./main.html";
//     } else alert("parol yoki username xato !");
//   } else alert("input to'liq to'ldiring !");
// });

btn2.addEventListener("click", (e)=>{
    e.preventDefault();
    const getUserData = JSON.parse(localStorage.getItem("userdata"));
    if(!getUserData) return alert("siz ro'yxatdan o'tmagansiz")
    if(userName2.value && password2.value){
        if(userName2.value ==getUserData[0] && password2.value == getUserData[1] ){
            window.location.href="./main.html"
        }else alert("Xato");
    }else alert("to'liq to'ldiring")
});
