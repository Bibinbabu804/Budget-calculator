function login(){
    const Username=document.getElementById("username").value
   
    const Password=document.getElementById("password").value
    
uname=localStorage.setItem('name',Username)

const storeddata=localStorage.getItem('USERDATA')
if(storeddata){
   const userData=JSON.parse(storeddata)

if(userData.Username===Username &&  userData.Password===Password){
    window.location="./main.html"
    alert('login successful')
}else{

    alert('incorrect password')
}


}




}