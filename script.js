const calculatebtn = document.getElementById("btn2");

calculatebtn.addEventListener("click",()=>{
    let from = document.getElementById("From");
    let to = document.getElementById("To");
    let input = document.getElementById("input").value;
    let result = document.getElementById("result");
    let resetbtn = document.getElementById("btn1");
    let fromUnit = from.value;
    let tounit = to.value;
    let calculatedTemperature;
   
    if(fromUnit === "celsius" && tounit === "Fahrenheit"){
        calculatedTemperature = parseFloat(input*1.800+32);
    }
    else if(fromUnit === "celsius" && tounit === "Kelvin"){
        calculatedTemperature = parseFloat(input)+273.15;
    }
    else if(fromUnit==="Fahrenheit" && tounit === "celsius"){
        calculatedTemperature = parseFloat((input)-32)*5/9;
    }
    else if(fromUnit==="Fahrenheit" && tounit === "Kelvin"){
        calculatedTemperature = parseFloat((input)-32)*5/9 + 273.15;
    }
    else if(fromUnit === "Kelvin" && tounit === "celsius" ){
        calculatedTemperature = parseFloat(input)-273.15;
    }
    else if(fromUnit === "Kelvin" && tounit === "Fahrenheit"){
        calculatedTemperature = parseFloat((input)*1.800)-459.67;
    }
    else{
        calculatedTemperature = input;
    }
    result.innerHTML = "Answer is: " + calculatedTemperature.toFixed(2) + ' ' + tounit;

    resetbtn.addEventListener("click",()=>{
        result.innerHTML = " ";
        document.getElementById("input").value = " ";
    })
})