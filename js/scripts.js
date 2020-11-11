var counterForm = document.querySelector('.counter-form');
var counterInput =  counterForm.querySelector('.counter-input');
var counterBtn =  counterForm.querySelector('.counter-btn');

var resultList = document.querySelector('.result-list');

var resultPersonInHour = resultList.querySelector('.counter-person-in-hour');

var resultBycleInHour = resultList.querySelector('.counter-velosiped-in-hour');

var resultCarInHour = resultList.querySelector('.counter-car-in-hour');

var resultPlaneInHour = resultList.querySelector('.counter-plane-in-hour');

var resultPersonInMin = resultList.querySelector('.counter-person-in-min');

var resultBycleInMin = resultList.querySelector('.counter-velosiped-in-min');

var resultCarInMin = resultList.querySelector('.counter-car-in-min');

var resultPlaneInMin = resultList.querySelector('.counter-plane-in-min');

var speedPerson = 0.06;

var speedBycle = 0.335;

var speedCar = 1.15;

var speedPlane = 13.332; 

counterForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  
  
  var inputValue = parseFloat(counterInput.value.trim(), 10);
  
  
  if (isNaN(inputValue)){
    alert(`Boshingiz ishlamayapti menimcha. Men bugun ${counterInput.value} km yurdim demaysizku :(( 
      Yoki botmisan to'grisini ayt :))`)
      return;
    }
    
    
    if (inputValue < 0 ){
      alert(` Orqaga yurayotgan bo'lsangiz ham sonni musbat kititing ! :))`);
      counterInput.value = "";
      resultPersonInHour.textContent = "0" ;
      resultPersonInMin.textContent = "0" ;
      resultBycleInHour.textContent = "0" ;
      resultBycleInMin.textContent = "0" ;
      resultCarInHour.textContent = "0" ;
      resultCarInMin.textContent = "0" ;
      resultPlaneInHour.textContent = "0" ;
      resultPlaneInMin.textContent = "0" ;
      return;
    }
    
    
    var timePersonInHour = Math.trunc((inputValue / speedPerson) / 60);
    var timePersonInMin = Math.floor((inputValue / speedPerson) % 60);
    resultPersonInHour.textContent = timePersonInHour ;
    resultPersonInMin.textContent = timePersonInMin ;
    
    
    //velo result on display :))
    
    var timeBycleInHour = Math.trunc((inputValue / speedBycle) / 60);
    var timeBycleInMin = Math.floor((inputValue / speedBycle) % 60);
    resultBycleInHour.textContent = timeBycleInHour ;
    resultBycleInMin.textContent = timeBycleInMin ;
    
    //car result on display :))
    
    var timeCarInHour = Math.trunc((inputValue / speedCar) / 60);
    var timeCarInMin = Math.floor((inputValue / speedCar) % 60);
    resultCarInHour.textContent = timeCarInHour ;
    resultCarInMin.textContent = timeCarInMin ;
    
    //result plane on display :))
    
    var timePlaneInHour = Math.trunc((inputValue / speedPlane) / 60);
    var timePlaneInMin = Math.floor((inputValue / speedPlane) % 60);
    resultPlaneInHour.textContent = timePlaneInHour ;
    resultPlaneInMin.textContent = timePlaneInMin ;
    
    
  })
  
  