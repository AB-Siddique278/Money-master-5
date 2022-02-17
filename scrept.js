//Income function
function myIncome(){

    const MyincomeInput = document.getElementById('income-input');
    const MyincomeAmount = MyincomeInput.value;

    return parseFloat(MyincomeAmount);

   
}

//Expenses function
function expenses(){

    // if (foodAmount < 0){
    //     alert("Hello world!");
        
    // }

    //food Cost
    const foodInput = document.getElementById('foodcost-input');
    const foodAmount = foodInput.value;

   
    
    //Rentcost
    const rentInput = document.getElementById('rentcost-input');
    const rentAmount = rentInput.value;
   
    //clothcost
    const clothInput = document.getElementById('clothcost-input');
    const clothAmount = clothInput.value;


    //total exprenses cost
    const expenses =parseFloat(foodAmount)+parseFloat(rentAmount)+parseFloat(clothAmount);
    const totalExpenses = document.getElementById('total-expneses');
    totalExpenses.innerText=expenses;
    return parseFloat(expenses);

    
}


    function mybalance(num1,num2 ){
        const totalAmountBalance=num1-num2;
        const mybalance= document.getElementById('balance');
        mybalance.innerText=totalAmountBalance;
        return parseFloat (totalAmountBalance);
    }

    //savsings amount

    function mysavingsBalance(num3){
        const inputsaving= document.getElementById('save-input');
        const inputsavingText = inputsaving.value;
        let TotalSaving =parseFloat(inputsavingText);
        let savingBalance = (num3*TotalSaving)/100;
        let savingAmount= document.getElementById('saving-amount');
        savingAmount.innerText=savingBalance;
        return parseFloat(savingBalance);
    }

    function RemainingBalance(num4,num5){
        const remaBalance = num4-num5;
        const remaAmount = document.getElementById('remaining-amount');
        remaAmount.innerText=remaBalance;
    }

    //call function 
    document.getElementById('calculate-button').addEventListener('click',function(){
        let myincome= myIncome();
        let myexprenses= expenses();
        let myBalance = mybalance(myincome,myexprenses);
        let myerror = errorM1();
        let myerror1 = errorM2();
        let myerror2 = errorM3();
        let myerror3 = errorM4();
        


        //call function for saving blance
        document.getElementById('apply-btn').addEventListener('click', function(){
            var mybalance = mysavingsBalance(myincome);
            var myremabalance = RemainingBalance(myBalance,mybalance);

            

        })
    

    });


    
