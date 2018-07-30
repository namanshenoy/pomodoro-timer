import {app, BrowserWindow} from 'electron'

import electronDebug from 'electron-debug'

electronDebug()

let mainWindow = null

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit
  }  
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 500, height: 400, frame: false, resizable: false})
  mainWindow.setMenu(null)
  mainWindow.loadURL('http://localhost:3000')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})