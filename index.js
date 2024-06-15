let allbtns=document.querySelectorAll(".operatr");
let inp=document.getElementById("inpbox");
let para=document.querySelector("p");
console.log(allbtns);
let count="";

 allbtns.forEach((btn)=>{
    console.log(btn)
    btn.addEventListener("click",()=>{
        if(btn.innerText=="AC"){
            inp.value="";
            count="";
        }
       else if(btn.innerText=="="){

        count=eval(count);
            inp.value=count
            
        }
        else if(btn.innerText=="DEL"){

            count=count.substring(0,count.length-1)
            inp.value=count;
            console.log(count);
           
                
            }
        else{
            count=count+btn.innerText;

            inp.value=count;
        }
      
    })
 })



  




