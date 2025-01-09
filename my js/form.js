let sub=()=>{
 let name=document.querySelector("#name").value;
 let number=document.querySelector("#num").Value;
 let email=document.querySelector("#email").Value;
 let pass=document.querySelector("#pass").Value;
 let cpass=document.querySelector("#cpass").Value;

 
 let errorname=document.querySelector("#error1");
 let numbererror=document.querySelector("#numbererror");
 let emailerror=document.querySelector("#emailerror");
 let passerror=document.querySelector("#passerror");
 let cpasserror=document.querySelector("3cpassrerror");


 if( name===" "){
   errorname.innerHTML=("please enter the name");
   errorname.style.color="red";
   errorname.fontSize="30px";
    return false;
 }
 


}