var counterForm = document.querySelector('.counter-form');
var counterInput =  counterForm.querySelector('.counter-input');
var counterBtn =  counterForm.querySelector('.counter-btn');

var resultList = document.querySelector('.result-list');
var resultPerson = resultList.querySelector('.counter-person');

var resultBycle = resultList.querySelector('.counter-velosiped');

var resultCar = resultList.querySelector('.counter-car');

var resultPlane = resultList.querySelector('.counter-plane');


var speedPerson = 3.6 ;

var speedBycle = 20.1 ;

var speedCar = 70 ;

var speedPlane = 800 ; 

counterForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  
  
  var inputValue = parseFloat(counterInput.value.trim() , 10);
  
  if (inputValue < 0 ){
    return
  }
  
  
  var timePerson = parseFloat((inputValue / speedPerson).toFixed(3) , 10) ;
  
  var timeBycle = parseFloat((inputValue / speedBycle).toFixed(3) , 10) ;
  
  var timeCar = parseFloat((inputValue / speedCar).toFixed(3) , 10) ;
  
  var timePlane = parseFloat((inputValue / speedPlane).toFixed(4) , 10) ;
  
  resultPerson.textContent = timePerson;
  
  resultBycle.textContent = timeBycle;
  
  resultCar.textContent = timeCar;
  
  resultPlane.textContent = timePlane;
  
  
  
  
  console.log(timePerson);
})

