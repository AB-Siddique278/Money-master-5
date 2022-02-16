document.getElementById('calculate-button').addEventListener('click', function(){
    //income 
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = incomeInput.value;
    
    // const newicomeAmount = parseFloat(incomeAmount);
    // console.log(newicomeAmount);

    //food
    const foodInput = document.getElementById('foodcost-input');
    const foodAmount = foodInput.value;
    // const newfoodAmount = parseFloat(foodAmount);
    // console.log(newfoodAmount);
    
    //rentcost
    const rentInput = document.getElementById('rentcost-input');
    const rentAmount = rentInput.value;
    // const newrentAmount= parseFloat(rentAmount);

    // console.log(newrentAmount);
    
    //clothcost
    const clothInput = document.getElementById('clothcost-input');
    const clothAmount = clothInput.value;
    // const newclothAmount = parseFloat(clothAmount);
    // console.log(newclothAmount);

    // const expenses = newfoodAmount+newrentAmount+newclothAmount;
    const expenses =parseFloat(foodAmount)+parseFloat(rentAmount)+parseFloat(clothAmount);
    const totalExpenses = document.getElementById('total-expneses');
    totalExpenses.innerText=expenses;

   


    const balance = parseFloat(incomeAmount)-parseFloat(expenses);
    const totalbalance = document.getElementById('balance');
    totalbalance.innerText=balance;

   


});
