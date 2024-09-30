function register(){
    const Username=document.getElementById("username").value
    
    const Email=document.getElementById("email").value
    
    const Password=document.getElementById("password").value

if(Username && Email && Password ){
    const userData ={

        Username:Username,
        Email:Email,
        Password:Password
    }
    localStorage.setItem("USERDATA",JSON.stringify(userData))
    console.log(userData);
 window.location="./login.html"
    alert('registration successful')
   


}else(
    alert('please  fill all the field')
)




}