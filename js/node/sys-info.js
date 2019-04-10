let si = require('systeminformation');
let os = require('os');
const http = require('../../main.js');
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  socket.emit('TEST_EMIT', {hello: "world"});
  socket.on('TEST_RECEIPT', (data)=>{
    console.log(data);
  });
});

// setInterval( ()=> {
//     si.cpuCurrentspeed()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));}
//   , 5000)
//
// si.cpu()

setInterval( () => {
    si.currentLoad()
      .then( data => console.log(data.currentload))
      .catch( err => console.log(err));
  }, 1000
);

// si.getDynamicData("*","*").then((data) => console.log(data.currentSpeed));
