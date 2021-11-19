// const socket = io('http://localhost:8000');

// socket.on('connect',()=>{
//     console.log('client connected to server')
// })

//socket.emit('message','hello server');

//console.log('home page');
const data = document.querySelector('h1');
const dataArray = JSON.parse(data.textContent);

console.log(dataArray);
data.remove()

const newheading = document.createElement('h2');
newheading.textContent = `Hii ! ${dataArray[0].firstName}`;
document.querySelector('#welcome-msg').appendChild(newheading);