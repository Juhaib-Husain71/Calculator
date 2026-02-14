let inputVal = "";
let buttons = document.querySelectorAll(".calc-button");
let screen = document.querySelector(".screen");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        
        if(e.target.innerHTML == "="){
            // console.log(inputVal);

            inputVal = eval(inputVal);
            screen.innerHTML = inputVal;

        }else if(e.target.innerHTML == "C"){
            inputVal = "";
            screen.innerHTML = inputVal;

        }else if(e.target.innerHTML == "←"){
            // console.log("arrow");
            inputVal = inputVal.slice(0, -1);
            screen.innerHTML = inputVal;

        }else{
            // console.log(e.target);
            // console.log(inputVal)
            inputVal = inputVal + e.target.innerHTML;
            screen.innerHTML = inputVal;
        }
    })
})
