function acquireDate() {
  var iDate = new Date();
  var currentDay = iDate.getDay();
  var currentMonth = iDate.getMonth();
	var currentNum = iDate.getDay(); 
	var currentYear = iDate.getYear(); 


switch(currentDay){
  case 0: var dayName = "Sunday";
  break;
  case 1: var dayName = "Monday";
  break;
  case 2: var dayName = "Tuesday";
  break;
  case 3: var dayName = "Wednesday";
  break;
  case 4: var dayName = "Thursday";
  break;
  case 5: var dayName = "Friday";
  break;
  case 6: var dayName = "Saturday";
  break;
}
document.getElementById('dateOutput').innerHTML = dayName + " ,"  + " " + currentMonth + " " + currentNum + ", " + currentYear;
}

// This function returns value of the Selected Day
function checkDate(){
  var requestDate =  new Date(document.getElementById('date').value);
  if (isNaN(requestDate)){
    console.log("Waiting for User Input");
  }else {
    var reqDay = (requestDate.getDay()) + 1;
    console.log(reqDay);

    switch(reqDay){
      //Sunday
      case 7: document.getElementById('time').innerHTML = '<option>8:00 am - 9:00 am </option><option>9:00 am - 10:00 am </option><option>10:00 am - 11:00 am</option><option>11:00 am - 12:00 pm</option><option>12:00 pm - 1:00 pm</option><option>1:00 pm - 2:00 pm</option><option>2:00 pm - 3:00 pm</option>';
      break;
      //Monday
      case 1: document.getElementById('time').innerHTML = '<option>8:00 am - 9:00 am </option><option>9:00 am - 10:00 am </option><option>10:00 am - 11:00 am</option><option>11:00 am - 12:00 pm</option><option>12:00 pm - 1:00 pm</option><option>1:00 pm - 2:00 pm</option><option>2:00 pm - 3:00 pm</option>';
      break;
      //Tuesday
      case 2: document.getElementById('time').innerHTML = '<option>8:00 am - 9:00 am </option><option>9:00 am - 10:00 am </option><option>10:00 am - 11:00 am</option><option>11:00 am - 12:00 pm</option><option>12:00 pm - 1:00 pm</option><option>1:00 pm - 2:00 pm</option><option>2:00 pm - 3:00 pm</option>';
      break;
      //Wednesday
      case 3: document.getElementById('time').innerHTML = '<option>8:00 am - 9:00 am </option><option>9:00 am - 10:00 am </option><option>10:00 am - 11:00 am</option><option>11:00 am - 12:00 pm</option><option>12:00 pm - 1:00 pm</option><option>1:00 pm - 2:00 pm</option><option>2:00 pm - 3:00 pm</option>';
      break;
			//Thurdsay
      case 4: alert("There are no available time slots for the selected day of the week ~Thursday. Please choose another day");
        location.reload('index.html#request');
      break;
      //Friday
      case 5: document.getElementById('time').innerHTML = '<option>8:00 am - 9:00 am </option><option>9:00 am - 10:00 am </option><option>10:00 am - 11:00 am</option><option>11:00 am - 12:00 pm</option><option>12:00 pm - 1:00 pm</option><option>1:00 pm - 2:00 pm</option><option>2:00 pm - 3:00 pm</option>';
      break;
      //Saturday
      case 6: document.getElementById('time').innerHTML = '<option>11:00 am - 12:00 pm</option><option>12:00 pm - 1:00 pm</option><option>1:00 pm - 2:00 pm</option><option>2:00 pm - 3:00 pm</option><option>3:00 pm - 4:00 pm</option><option>4:00 pm - 5:00 pm</option>';
      break;

    }


  }
}
