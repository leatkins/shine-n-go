function setSessionStorage(){
    var userCompany = document.getElementById('company').value;
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zipCode = document.getElementById('zipCode').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var reqService = document.getElementById('service').value;
    var reqDate = JSON.stringify(document.getElementById('date').value);
    var reqTime = JSON.stringify(document.getElementById('time').value);

localStorage.setItem('item1', userCompany);
localStorage.setItem('item2', firstName);
localStorage.setItem("item3", lastName);
localStorage.setItem('item4', address);
localStorage.setItem('item5', city);
localStorage.setItem('item6', state);
localStorage.setItem('item7', zipCode);
localStorage.setItem('item8', phoneNumber);
localStorage.setItem('item9', email);
localStorage.setItem('item10', reqService);
localStorage.setItem('item11', reqDate);
localStorage.setItem('item12', reqTime);

}

function getStorage(){
  document.getElementById('userCompany').innerHTML = localStorage.getItem('item1');
  document.getElementById('name').innerHTML = (localStorage.getItem('item2') + " " + localStorage.getItem("item3"));
  document.getElementById('address').innerHTML = localStorage.getItem('item4');
  document.getElementById('city').innerHTML = localStorage.getItem('item5');
  document.getElementById('state').innerHTML = localStorage.getItem('item6');
  document.getElementById('zipCode').innerHTML = localStorage.getItem('item7');
  document.getElementById('phoneNumber').innerHTML =  localStorage.getItem('item8');
  document.getElementById('email').innerHTML = localStorage.getItem('item9');
  document.getElementById('reqService').innerHTML = localStorage.getItem('item10');
  document.getElementById('reqDate').innerHTML = localStorage.getItem('item11');
  document.getElementById('reqTime').innerHTML = localStorage.getItem('item12');
}
