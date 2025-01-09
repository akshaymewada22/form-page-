 let hh=()=>{

    let name=document.querySelector("#name").value;
let number=document.querySelector("#num").value;
let eamil=document.querySelector("#eamil").value;
let pass=document.querySelector("#pass").value;
let cpass=document.querySelector("#cpass").value;


let error1=document.querySelector("#error1");
let error2=document.querySelector("#error2")
let error3=document.querySelector("#error3");
let error4=document.querySelector("#error4");
let error5=document.querySelector("#error5");

 

if(name===""){
  error1.innerHTML="please enter";
    error1.style.color="red";
    error1.fontSize="60px"
    return false;

}
 
  else if(isNaN(number==="")){
    
    error2.innerHTML="please enter  number";
    error2.style.color="red";
    return false;
 }

 else if((number.length!==10)){
    
    error2.innerHTML="please enter   vaild number";
    error2.style.color="red";
    return false;
 }


 else if(!(eamil.includes("@")&& eamil.includes(".com"))){
    error3.innerHTML=("plese enter vaild eamil");
    error3.style.color="red";
        return false;
 }


 else if( pass===""){
    error4.innerHTML=("plese enter  vaild password");
    error4.style.color="red";
        return false;
 }

 else if(!( pass.match(/[1234567890]/)&&pass.match(/[!@#$%^&*()]/)&&pass.match(/[a-z]/)&&pass.match(/[A-Z]/)))

 {
   error4.innerHTML = "Password contain atleast 1 lower, upper ,special and number";
   document.querySelector('#errorpass').style.color = "red";
   let pass=document.querySelector("#pass")
   pass.style.borderColor = "red"
   pass.style.outlineColor = "red"
   
   return false;
}

 
 else if( pass!=cpass){
    error5.innerHTML=(" password not match");
    error5.style.color="red";
    return false;


 }


}


// let hh=()=>{
//     alert("hii")
// }

 
