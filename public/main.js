const { app, BrowserWindow } = require('electron')
const remoteMain = require('@electron/remote/main')
remoteMain.initialize()

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // https://stackoverflow.com/questions/56091343/typeerror-window-require-is-not-a-function      
   }
  })

  //load the index.html from a url
  win.loadURL('http://localhost:3000');

  // https://stackoverflow.com/questions/69059668/enableremotemodule-is-missing-from-electron-v14-typescript-type-definitions/69059669#69059669
  remoteMain.enable(win.webContents);
  
  // Open the DevTools.
  win.webContents.openDevTools()

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

