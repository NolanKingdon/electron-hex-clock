let si = require('systeminformation');
let os = require('os');

// setInterval( ()=> {
//     si.cpuCurrentspeed()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));}
//   , 5000)
//
// si.cpu()
//   .then(data => console.log(data));

setInterval(
  () => console.log(os.cpus()[0].speed)
  , 3000
)


// si.getDynamicData("*","*").then((data) => console.log(data.currentSpeed));
