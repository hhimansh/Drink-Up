
// declaring total quantity of drinks and there total amount to 0 initially
var quantityApple, quantityStrawberry, quantityLemon, quantityPeach, quantityLester, quantityGrain = 0;
var totalAmountApple, totalAmountStrawberry, totalAmountLemon, totalAmountPeach, totalAmountLester, totalAmountGrain = 0;
 
// Calculating total amount for apple drinks
function calApple() {
    // Parsing quantity input
    quantityApple = parseInt(document.getElementById("quantityApple").value);
    // validating for non integer and empty input
    if(isNaN(quantityApple) || quantityApple === ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Apple Drink!!";
    }
    // calculating total price for given number of drinks
    else{
        totalAmountApple = quantityApple * 8;
        document.getElementById("message").innerHTML = "Your order for "+quantityApple+" Apple drinks have been added to cart!!";
        //document.getElementById("apple").value = quantityApple;
    }
}

// Calculating total amount for Strawberry drinks
function calStrawberry() {
    // Parsing quantity input
    quantityStrawberry = parseInt(document.getElementById("quantityStrawberry").value);
    // validating for non integer and empty input
    if(isNaN(quantityStrawberry) || quantityStrawberry === ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Strawberry Drink!!";
    }
    // calculating total price for given number of drinks
    else{
        totalAmountStrawberry = quantityStrawberry * 12;
        document.getElementById("message").innerHTML = "Your order for "+quantityStrawberry+" Strawberry drinks have been added to cart!!";
    }
}

// Calculating total amount for Lemon drinks
function calLemon() {
    // Parsing quantity input
    quantityLemon = parseInt(document.getElementById("quantityLemon").value);
    // validating for non integer and empty input
    if(isNaN(quantityLemon) || quantityLemon === ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Lemon Drink!!";
    }
    // calculating total price for given number of drinks
    else{
        totalAmountLemon = quantityLemon * 12;
        document.getElementById("message").innerHTML = "Your order for "+quantityLemon+" Lemon drinks have been added to cart!!";
    }
}

// Calculating total amount for Peach drinks
function calPeach() {
    // Parsing quantity input
    quantityPeach = parseInt(document.getElementById("quantityPeach").value);
    // validating for non integer and empty input
    if(isNaN(quantityPeach) || quantityPeach === ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Peach Drink!!";
    }
    // calculating total price for given number of drinks
    else{
        totalAmountPeach = quantityPeach * 12;
        document.getElementById("message").innerHTML = "Your order for "+quantityPeach+" Peach drinks have been added to cart!!";
    }
}

// Calculating total amount for Lester drinks
function calLester() {
    // Parsing quantity input
    quantityLester = parseInt(document.getElementById("quantityLester").value);
    // validating for non integer and empty input
    if(isNaN(quantityLester) || quantityLester === ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Lester Drink!!";
    }
    // calculating total price for given number of drinks
    else{
        totalAmountLester = quantityLester * 12;
        document.getElementById("message").innerHTML = "Your order for "+quantityLester+" Lester drinks have been added to cart!!";
    }
}

// Calculating total amount for pomegranate drinks
function calGrain() {
    // Parsing quantity input
    quantityGrain = parseInt(document.getElementById("quantityPomegranate").value);
    // validating for non integer and empty input
    if(isNaN(quantityGrain) || quantityGrain === ""){
        document.getElementById("message").innerHTML = "Please enter valid numeric quantity for Pomegranate Drink!!";
    }
    // calculating total price for given number of drinks
    else{
        totalAmountGrain = quantityGrain * 12;
        document.getElementById("message").innerHTML = "Your order for "+quantityGrain+" Pomegranate drinks have been added to cart!!";
    }
}




function check(){ 
        document.getElementById("apple").value = quantityApple;
}
