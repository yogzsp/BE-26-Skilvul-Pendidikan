document.addEventListener("DOMContentLoaded", function(event) { 
    let data = JSON.parse(localStorage.getItem("users"));
    if(data == null){
        window.location.href = "./index.html";
    }
    console.log(data);
});

async function logout(){
    localStorage.removeItem("users");
    window.location.href = "./index.html";
}