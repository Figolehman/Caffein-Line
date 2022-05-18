function isalpha(name){
    var i = 0;
    for(i = 0 ; i<name.length ; ++i){
        if(name[i]>="0" && name[i]<="9"){
            return false;
        }
    }
    return true;
}

function check(){
    var card = document.getElementById("card").value;
    var month = document.getElementById("mm").value;
    var year = document.getElementById("yy").value;
    var cvv = document.getElementById("CVV").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var form = document.querySelector("form").value;
    var agree = document.getElementById("agree").checked;
    // console.log(email);
    if(card == ""){
        alert("Card number must be filled");
        return false;
    }
    if(month == "" || year == ""){
        alert("Expiry date must be filled");
        return false;
    }
    if(cvv == ""){
        alert("CVV must be filled");
        return false;
    }
    if(name == ""){
        alert("Full name must be filled");
        return false;
    }
    if(email == ""){
        alert("Email must be filled");
        return false;
    }
    if(city == ""){
        alert("City must be filled");
        return false;
    }
    if(address == ""){
        alert("Address must be filled");
        return false;
    }
    if(card.length != 16){
        alert("Card number is invalid");
        return false;
    }
    if(month > 12 || month < 1 || year.length != 2){
        alert("Expiry date is invalid");
        return false;
    }
    if(cvv.length != 3){
        alert("CVV is invalid");
        return false;
    }
    if(isalpha(name) == false){
        alert("Full name can not contain number");
        return false;
    }
    if(email.includes("@")==false || email.includes(".")==false){
        alert("Email is invalid");
        return false;
    }
    if(isalpha(city) == false){
        alert("City is invalid");
        return false;
    }
    if(agree == false){
        alert("You have to read and agree to the terms of service and Privacy policy");
        return false;
    }
}