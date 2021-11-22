// const socket = io('http://localhost:8000');

// socket.on('connect',()=>{
//     console.log('client connected to server')
// })

//socket.emit('message','hello server');

//console.log('home page');
let data = document.querySelector('h1');
let dataArray = JSON.parse(data.textContent);

console.log(dataArray);
data.remove()

let firstName = dataArray[0].firstName;
let lastName = dataArray[0].lastName;
let email = dataArray[0].email;
let age = dataArray[0].age;
let phone = dataArray[0].phone;
let city = dataArray[0].city;
let state = dataArray[0].state;
let password = dataArray[0].password;
let image = dataArray[0].image;


//console.log(firstName,lastName,age,phone,city,state,password,image,email);

let newheading = document.createElement('h2');
newheading.textContent = `Hii ! ${firstName}`;
document.querySelector('#welcome-msg').appendChild(newheading);

let userImage = document.createElement('img');
userImage.src = `./uploads/${image}`;
document.querySelector('#profile-pic-div').appendChild(userImage).setAttribute('height','90px','width','90px');

let userName = document.createElement('h4');
userName.textContent = ` :  ${firstName} ${lastName}`;
document.querySelector('#name').appendChild(userName);

let userEmail = document.createElement('h4');
userEmail.textContent = ` :  ${email}`;
document.querySelector('#email').appendChild(userEmail);

let userAge = document.createElement('h4');
userAge.textContent = ` :  ${age}`;
document.querySelector('#age').appendChild(userAge);

let userPhone = document.createElement('h4');
userPhone.textContent = ` :  ${phone}`;
document.querySelector('#phone').appendChild(userPhone);

let userCity = document.createElement('h4');
userCity.textContent = ` :  ${city}`;
document.querySelector('#city').appendChild(userCity);

let userState = document.createElement('h4');
userState.textContent = ` :  ${state}`;
document.querySelector('#state').appendChild(userState);




// const info = document.querySelector('p');
// const infoArray = JSON.parse(info.textContent);
// console.log('this is redis data');
// console.log(infoArray);
// info.remove()







