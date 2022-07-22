var inputFive = document.getElementById('five');
var inputTen = document.getElementById('ten');
var inputFifteen = document.getElementById('fifteen');
var inputTwentyFive = document.getElementById('twentyfive');
var inputFifty = document.getElementById('fifty');
var resetBt = document.getElementById('reset');
var customTip = document.getElementById('custom-tip');




var billP = document.getElementById('Billp')
var peopleP = document.getElementById('peopleP')

var totalPers = document.getElementById('totalPers');
var amountPers = document.getElementById('amountPers');

var message = '<span style="color:red">Cant be zero</span>';
resetBt.disabled = true;



// podstawowa funkcja do obliczania napiwku
function tipMath() {

    var billAmount = document.getElementById('numberOne').value;
    var peopleCount = document.getElementById('PeopleCount').value;
    var total = ((billAmount * tipNum) / 100) / peopleCount + (billAmount/peopleCount);
    var tip = ((billAmount * tipNum) / 100) / peopleCount;
   
    
    total = total.toFixed(2);
    totalPers.innerHTML = '$'+total;
    tip = tip.toFixed(2);
    amountPers.innerHTML = '$' + tip;
   
}
// funkcja sprawdzajaca czy pola sa wypelnione
function checkButtons() {
    var billAmount = document.getElementById('numberOne').value;
    var peopleCount = document.getElementById('PeopleCount').value;
    if (billAmount === 0 || billAmount === '') {
        billP.innerHTML = 'Bill                          ' + message;
        peopleP.innerHTML = 'Number of People'; 
        
    }
    else if (peopleCount === 0 || peopleCount === '') {
        billP.innerHTML = 'Bill';
        peopleP.innerHTML = 'Number of People                       ' + message;
        
        
    }
    else {
        peopleP.innerHTML = 'Number of People';
        billP.innerHTML = 'Bill';
        tipMath();
        
    }
    resetBt.disabled = false;
    resetBt.addEventListener('click', function () {
        window.location.reload();
    })
}
// funkcja obliczajaca napiwek w przypadku uzycia customowego napiwku
function tipMathCustom() {
    var tipNum = customTip.value;
    var billAmount = document.getElementById('numberOne').value;
    var peopleCount = document.getElementById('PeopleCount').value;
    var total = ((billAmount * tipNum) / 100) / peopleCount + (billAmount/peopleCount);
    var tip = ((billAmount * tipNum) / 100) / peopleCount;
   
    
    total = total.toFixed(2);
    totalPers.innerHTML = '$'+total;
    tip = tip.toFixed(2);
    amountPers.innerHTML = '$' + tip;
    console.log(tipNum);
   
    
}
// funkcja sprawdzajaca czy pola sa wypelnione w przypadku oblugi customowego napiwku

function custom() {
    var billAmount = document.getElementById('numberOne').value;
    var peopleCount = document.getElementById('PeopleCount').value;
    if (billAmount === 0 || billAmount === '') {
    billP.innerHTML = 'Bill                          ' + message;
    peopleP.innerHTML = 'Number of People'; 
    
}
    else if (peopleCount === 0 || peopleCount === '') {
    billP.innerHTML = 'Bill';
    peopleP.innerHTML = 'Number of People                       ' + message;
    
    
}
    else {
    peopleP.innerHTML = 'Number of People';
    billP.innerHTML = 'Bill';
    tipMathCustom();
   
}
resetBt.disabled = false;
    resetBt.addEventListener('click', function () {
        window.location.reload();
    });
}

inputFive.addEventListener('click', function () {
   
    tipNum = 5;
    
    checkButtons();
  
});


inputTen.addEventListener('click', function () {
   
    tipNum = 10;
    
    checkButtons();
    
});

inputFifteen.addEventListener('click', function () {
   
    tipNum = 15;
    
    checkButtons();
    
});

inputTwentyFive.addEventListener('click', function () {
   
    tipNum = 25;
    
    checkButtons();
   
});
inputFifty.addEventListener('click', function () {
   
    tipNum = 50;
    
    checkButtons();
   
});




