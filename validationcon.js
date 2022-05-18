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
    var last = document.getElementById("last").value;
    var first = document.getElementById("first").value;
    var message = document.getElementById("message").value;
    if(first == ''){
        alert("First name must be filled");
        return false;
    }
    if(last == ''){
        alert("Last name must be filled");
        return false;
    }
    if(message == ''){
        alert("Message must be filled");
        return false;
    }
    if(isalpha(first) == false){
        alert("First name is invalid");
        return false;
    }
    if(isalpha(last) == false){
        alert("Last name is invalid");
        return false;
    }
}