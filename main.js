const { app, BrowserWindow } = require('electron');
const path = require("path");
const url = require("url");
require('./js/node/sys-info.js');
//Server vars and setup

//Electron Window setup
let win;

function createWindow(){
  //Getting screen size
  const {screen} = require('electron');
  const mainScreen = screen.getPrimaryDisplay();
  const width = mainScreen.bounds.width;
  const height = mainScreen.bounds.height;

  //creating browser window
  win = new BrowserWindow({
    alwaysOnTop: true,
    frame: false, //External frame
    width: width*0.3,//Setting to a percent of the screen width
    height: height,//Setting to screen height
    icon: __dirname + '/images/clock.png',
    x: -width*0.3,//Offset so we're on the secondary screen
    y: 0,
  });
  win.setMenu(null);

  //loading index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: "file",
    slashes: true,
  }));

  //To open dev tools (Dev only)
  win.webContents.openDevTools();
  //Handling close
  win.on("closed", () => { win = null });
}

//Running the build when ready
app.on("ready", createWindow)
//Quit

app.on("window-all-closed", () => {
  //Checking to see if not a mac -- Not auto closing
  if(process.platform !== 'darwin'){
    app.quit();
  }
})
