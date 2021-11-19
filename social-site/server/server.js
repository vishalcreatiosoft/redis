const io = require('socket.io')(8000,{
    cors : {
        origin : ['http://localhost:3000']
    }
});


io.on('connection', socket =>{
    console.log(socket.id);

    socket.on('message',(message)=>{
        console.log(message);
    })
})