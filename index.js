

let a;
let num_btn = document.getElementById("num-btm");


   a = document.getElementById("btn")
   
   a.innerHTML="year";

        a.style.color = "orange";
        a.style.fontSize = "22px";
        document.getElementById('musthafa').style.backgroundColor="grey";
        document.getElementById('musthafa').style.fontSize = "33px";
        document.getElementById('musthafa').style.fontStyle= " bold";
        document.getElementById('musthafa').style.fontStyle= " bold";

    num_btn.addEventListener("click",()=>{
            num_btn.style.color = a.style.color
            num_btn.style.fontSize = "40px"

    });

        const num1 = 10;
        const num2 = 25;

       const total = num1 + num2;

       num_btn.innerHTML = total

       

        console.log(total);
        

