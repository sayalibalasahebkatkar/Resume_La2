const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
let validname=false;
let validemail=false;
let validphone=false;
// console.log(name)

name.addEventListener('blur',()=>{
   let regex=/^[a-zA-Z]([0-9a-zA-Z]{1,30})$/;
   let str=name.value;
   console.log(regex,str);
   if(regex.test(str)){
       console.log("It matched..")
       name.classList.remove("is-invalid")
       validname=true;
   }
   else{
       console.log("No match")
       name.classList.add("is-invalid")
       validname=false;
   }
   
})

email.addEventListener('blur',()=>{
    let regex=/^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
   let str=email.value;
   console.log(regex,str);
   if(regex.test(str)){
       console.log("It matched..");
       email.classList.remove("is-invalid");
       validemail=true;
   }
   else{
       console.log("No match")
       email.classList.add("is-invalid")
       validemail=false;
   }
})

phone.addEventListener('blur',()=>{
    
    let regex=/^([0-9]){10}$/;
   let str=phone.value;
   console.log(regex,str);
   if(regex.test(str)){
       console.log("It matched..")
       phone.classList.remove("is-invalid")
       validphone=true;
   }
   else{
       console.log("No match")
       phone.classList.add("is-invalid")
       validphone=false;
   }
})

let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();

    if(validname && validemail && validphone){
        let success=document.getElementById('success');
        setTimeout(() => {
            success.style.display="none";
        }, 4000);
        name.value="";
        email.value="";
        phone.value="";
        success.style.display="block";
    }
    else{
        let failure=document.getElementById('failure');
        setTimeout(() => {
            failure.style.display="none";
        }, 4000);
        failure.style.display="block";
    }
    
    
})