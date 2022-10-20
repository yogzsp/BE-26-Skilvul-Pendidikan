// check apakah sudah login atau tidak?
document.addEventListener("DOMContentLoaded", function(event) { 
    let data = JSON.parse(localStorage.getItem("users"));
    if(data != null){
        window.location.href = "./home_user.html";
    }
    console.log(data);
});

async function loginAccount(email="",password=""){
    let url = "https://635008f878563c1d82b707aa.mockapi.io/user/";
    let newPass = hashPassword(password);
    
    let dataUser = await getDataByEmail(email);

    if(dataUser.length < 1){
        alert("Akun tidak ditemukan");
    }else{
        if(newPass == dataUser[0].password){
            let data = {
                id:dataUser[0].id,
                email:dataUser[0].email,
                username:dataUser[0].username
            }
            
            localStorage.setItem("users",JSON.stringify(data));
            window.location.href = "./home_user.html";
        }else{
            alert("Password salah!")
        }
    }
}

document.getElementById("login-akun").addEventListener("click", async (e) => {
    e.preventDefault();
    if(document.getElementById("password").value != "" && document.getElementById("email").value != ""){
        loginAccount(document.getElementById("email").value,document.getElementById("password").value)
    }
})