const logIn =[];
const logear =() => {
    const user = document.getElementById("txtUser").value;
    const password = document.getElementById("txtPassword").value;    
    //console.log(user, password);
    if(user && password){
        document.getElementById("txtUser").value ="";
        document.getElementById("txtPassword").value ="";        
        logIn.push({user});    
        localStorage.setItem("usuario",user);//JSON.stringify(logIn));  
       
        //JSON.stringify(user)   
        window.location="index.html";
    }else{
        
        alert("Nombre de usuario o contraseña invalida");
    }
}
// let entrar= JSON.parse(localStorage.getItem("usuario"));

// if (entrar){
//     console.log(entrar);
// }else{
//     window.location="login.html";
// }
 



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded",()=> {
    document.getElementById("botonLog").addEventListener("click", logear);
});