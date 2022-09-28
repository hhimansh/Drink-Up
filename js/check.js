
function checkOut(){

    let form1Error = "";
    let amountApple, amountStrawberry, amountLemon, amountPeach, amountLester = 0;
    let amountTotal = 0;
    let receiptDisplay = "";
    // Drinks validation
    let drinkApple = parseInt(document.getElementById("apple").value);
    let drinkStrawberry = parseInt(document.getElementById("strawberry").value);
    let drinkLemon = parseInt(document.getElementById("lemon").value);
    let drinkPeach = parseInt(document.getElementById("peach").value);
    let drinkLester = parseInt(document.getElementById("lester").value);

    // if(drinkApple == ""){drinkApple=0}
    // if(drinkStrawberry==""){drinkStrawberry=0}
    // if(drinkLemon==""){drinkLemon=0}
    // if(drinkPeach==""){drinkPeach=0}
    // if(drinkLester==""){drinkLester=0}
    
    if(isNaN(drinkApple) || isNaN(drinkStrawberry) || isNaN(drinkLemon) || isNaN(drinkPeach) || isNaN(drinkLester)){
        form1Error += `Only numeric values are allowed<br>`;
    }
    else if(drinkApple < 0 || drinkStrawberry <0 || drinkLemon < 0|| drinkPeach < 0 || drinkLester <0){
        form1Error += `Please enter positive numeric quantity for drinks only<br>`;
    }
    else if(drinkApple >= 0 || drinkStrawberry >=0 || drinkLemon >= 0|| drinkPeach >= 0 || drinkLester >= 0){
        amountApple = drinkApple * 8;
        amountStrawberry = drinkStrawberry * 12;
        amountLemon = drinkLemon * 6;
        amountPeach = drinkPeach * 15;
        amountLester = drinkLester * 20;
        amountTotal = amountApple+amountStrawberry+amountLemon+amountPeach+amountLester;
        if(amountTotal < 10){
            form1Error += `For order completion total amount cannot be less than $10<br>`;
        }
    }

        let form2Error = "";
        let orderName = document.getElementById("name").value;
        orderName = orderName.trim();
        let phoneNumberExp = /^[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;
        let phoneNumber = document.getElementById("phone").value;
        phoneNumber = phoneNumber.trim();
        let cardNumberExp = /^[0-9]{4}[\s\-]?[0-9]{4}[\s\-]?[0-9]{4}[\s\-]?[0-9]{4}$/;
        let cardNumber = document.getElementById("cardNumber").value;
        cardNumber = cardNumber.trim();
        let expiryMonthExp = /^[0-9]{2}$/;
        let expiryMonth = document.getElementById("cardMonthExpiry").value;
        expiryMonth = expiryMonth.trim();
        let expiryYearExp = /^[0-9]{4}$/;
        let expiryYear = document.getElementById("cardYearExpiry").value;
        expiryYear = expiryYear.trim();
        if(orderName === ""){
            form2Error += `Please enter your name <br>`;
        }
        if (phoneNumber == ""){
            form2Error += `Please do not leave phone number field empty<br>`;
        }
        else if(!phoneNumberExp.test(phoneNumber)){
            form2Error += `Please enter 10 digit phone number in correct format<br>`;
        }
        if(cardNumber == ""){
            form2Error += "";
        }
        else if(!cardNumberExp.test(cardNumber)){
            form2Error += `Please enter card Number in correct format (16 digit)<br>`;
        }
        if(expiryMonth == ""){
            form2Error += "";
        }
        else if(!expiryMonthExp.test(expiryMonth)){
            form2Error += `Please enter expiry month in correct format (2 digit) <br>`;
        }
        if(expiryYear == ""){
            form2Error += "";
        }
        else if(!expiryYearExp.test(expiryYear)){
            form2Error += `Please enter expiry year in correct format (4 digit)<br>`;
        }
        if(form2Error !== "" || form1Error!== ""){
            document.getElementById("errDisplay2").innerHTML = form2Error;
        }
        else{
            receiptDisplay = `
            Customer Name    : ${orderName}<br>
            Phone Number     : ${phoneNumber}<br>
            Apple Drinks     : ${drinkApple}      : $${amountApple}<br>
            Strawberry Drinks: ${drinkStrawberry}: $${amountStrawberry}<br>
            Lemon Drinks     : ${drinkLemon}     : $${amountLemon}<br>
            Peach Drinks     : ${drinkPeach}     : $${amountPeach}<br>
            Lester Drinks    : ${drinkLester}    : $${amountPeach}<br> 
            Total Cost       : $${amountTotal}
            `;
            document.getElementById("finalReceipt").innerHTML = receiptDisplay;
        }
    // Details validation
    // let form2Error = "";
    // let orderName = document.getElementById("name").value;
    // orderName = orderName.trim();
    // if(orderName === ""){
    //     form2Error += `Please enter your name <br>`;
    // }

    // let phoneNumberExp = /^[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;
    // let phoneNumber = document.getElementById("phone").value;
    // phoneNumber = phoneNumber.trim();
    // if (phoneNumber == ""){
    //     form2Error += `Please do not leave phone number field empty<br>`;
    // }
    // else if(!phoneNumberExp.test(phoneNumber)){
    //     form2Error += `Please enter 10 digit phone number in correct format<br>`;
    // }

    // let cardNumberExp = /^[0-9]{4}[\s\-]?[0-9]{4}[\s\-]?[0-9]{4}[\s\-]?[0-9]{4}$/;
    // let cardNumber = document.getElementById("cardNumber").value;
    // cardNumber = cardNumber.trim();
    // if(cardNumber == ""){
    //     form2Error += "";
    // }
    // else if(!cardNumberExp.test(cardNumber)){
    //     form2Error += `Please enter card Number in correct format (16 digit)<br>`;
    // }

    // let expiryMonthExp = /^[0-9]{2}$/;
    // let expiryMonth = document.getElementById("cardMonthExpiry").value;
    // expiryMonth = expiryMonth.trim();
    // if(expiryMonth == ""){
    //     form2Error += "";
    // }
    // else if(!expiryMonthExp.test(expiryMonth)){
    //     form2Error += `Please enter expiry month in correct format (2 digit) <br>`;
    // }

    // let expiryYearExp = /^[0-9]{4}$/;
    // let expiryYear = document.getElementById("cardYearExpiry").value;
    // expiryYear = expiryYear.trim();
    // if(expiryYear == ""){
    //     form2Error += "";
    // }
    // else if(!expiryYearExp.test(expiryYear)){
    //     form2Error += `Please enter expiry year in correct format (4 digit)<br>`;
    // }

    // if(form2Error !== "" || form1Error!== ""){
    //     document.getElementById("errDisplay2").innerHTML = form2Error;
    // }

    // else{
    //     receiptDisplay = `
    //     Customer Name    : ${orderName}<br>
    //     Phone Number     : ${phoneNumber}<br>
    //     Apple Drinks     : ${drinkApple}      : $${amountApple}<br>
    //     Strawberry Drinks: ${drinkStrawberry}: $${amountStrawberry}<br>
    //     Lemon Drinks     : ${drinkLemon}     : $${amountLemon}<br>
    //     Peach Drinks     : ${drinkPeach}     : $${amountPeach}<br>
    //     Lester Drinks    : ${drinkLester}    : $${amountPeach}<br> 
    //     Total Cost       : $${amountTotal}
    //     `;
    //     document.getElementById("finalReceipt").innerHTML = receiptDisplay;
    // }

    return false;
}
