
//error handaling for Income
function errorM1(){
    var Ferror = document.getElementById('error1');
    if(isNaN(document.getElementById('income-input').value)){
         Ferror.innerHTML="<span style='color: red;'>" +  "Enter a valid Input</span>" 
         
        
    }


    else{
        Ferror.innerHTML = '';
    }
}


//error handaling for Food
function errorM2(){
    var Ferror = document.getElementById('error2');
    if(isNaN(document.getElementById('foodcost-input').value)){
         Ferror.innerHTML="<span style='color: red;'>" +  "Enter a valid Input</span>" 
         
         
    }


    else{
        Ferror.innerHTML = '';
    }
}


//error handaling for Rant
function errorM3(){
    var Ferror = document.getElementById('error3');
    if(isNaN(document.getElementById('rentcost-input').value)){
         Ferror.innerHTML="<span style='color: red;'>" +  "Enter a valid Input</span>" 
         
         
    }


    else{
        Ferror.innerHTML = '';
    }
}


//error handaling for Cloth
function errorM4(){
    var Ferror = document.getElementById('error4');
    if(isNaN(document.getElementById('clothcost-input').value)){
         Ferror.innerHTML="<span style='color: red;'>" +  "Enter a valid Input</span>" 
         
        
    }


    else{
        Ferror.innerHTML = '';
    }
}

//error handaling for Savings
function errorM5(){
    var Ferror = document.getElementById('error5');
    if(isNaN(document.getElementById('save-input').value)){
         Ferror.innerHTML="<span style='color: red;'>" +  "Enter a valid Input</span>" 
         
        
    }


    else{
        Ferror.innerHTML = '';
    }
}


document.getElementById('apply-btn').addEventListener('click',function(){

    let myerror4 = errorM5();
})
