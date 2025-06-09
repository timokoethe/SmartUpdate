import { app, shell, BrowserWindow, ipcMain, screen, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
const fs = require('fs')

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 720,
    height: 1280,
    show: false,
    autoHideMenuBar: true,
    //fullscreen: true,
    ...(process.platform === 'linux' ? { icon } : { icon }),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: false,
    }
  })

  mainWindow.setAspectRatio(16 / 9)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  // Full Screen Mode
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const marginError = 0.5
  const targetAspectRatio = 16 / 9

  if (Math.abs(width / height - targetAspectRatio) <= marginError) {
    console.log('The aspect ratio of the screen is 16:9.')
    // Dialog Window
    dialog.showMessageBox(mainWindow,{
      type: 'question',
      message: 'The aspect ratio of the screen is 16:9.',
      detail: 'Do you want to switch to full screen mode?',
      buttons: ['Yes', 'No']
    }).then((response) => {
      if (response.response === 0) {
        mainWindow.setFullScreen(true)
      } else {
        console.log('No clicked')
      }
    })
  }

  /*
  ipcMain.on('toggel-FullScreen', (event) => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize

    if (width / height == 9 / 16) {
    const isFullScreen = mainWindow.isFullScreen()
    mainWindow.setFullScreen(!isFullScreen)
    } else {
      dialog.showMessageBox({
        type: 'error',
        message: 'The aspect ratio of the screen is not 9:16.',
        detail: 'Please change the aspect ratio of the screen to 9:16 and try again.',
        buttons: ['OK']
    })
  }
  })*/
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  // IPC Save Timestamp for click on Start Button
  ipcMain.on('saveStartStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `\n${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Start Timestamp saved:', timeStamp)
    })
  })

  // IPC Save Timestamp for click on any button
  ipcMain.on('saveButtonStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Continue Timestamp saved:', timeStamp)
    })
  })

  // IPC Save Timestamp for Back Button
  ipcMain.on('saveBackStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `Back at: ${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Back Timestamp saved:', timeStamp)
    })
  })

  // IPC Save Timestamp for Cancel Button
  ipcMain.on('saveCancelStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `Cancel at: ${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Cancel Timestamp saved:', timeStamp)
    })
  })

  // IPC Save Timestamp for Complete Button
  ipcMain.on('saveCompleteStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `Completed at: ${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Complete Timestamp saved:', timeStamp)
    })
  })

  // IPC Save Timestamp for Apple Picker Button
  ipcMain.on('saveAppleStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `Apple at: ${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Apple Timestamp saved:', timeStamp)
    })
  })

  // IPC Save Timestamp for Android Option Picker Button
  ipcMain.on('saveAndroidPickerStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `Android at: ${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Android Timestamp saved:', timeStamp)
    })
  })

  // IPC Save Timestamp for Huawei Picker Button
  ipcMain.on('saveHuaweiStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `Huawei at: ${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Huawei Timestamp saved:', timeStamp)
    })
  })

  // IPC Save Timestamp for Samsung Picker Button
  ipcMain.on('saveSamsungStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `Samsung at: ${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Samsung Timestamp saved:', timeStamp)
    })
  })

  // IPC Save Timestamp for Info Button
  ipcMain.on('saveInfoStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `Info at: ${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Info Timestamp saved:', timeStamp)
    })
  })

  // IPC Save Timestamp for Info Cancel Button
  ipcMain.on('saveInfoCloseStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `Info closed at: ${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Info Close Timestamp saved:', timeStamp)
    })
  })

  // IPC Save Timestamp for Language Button
  ipcMain.on('saveLanguageStamp', (_, timeStamp) => {
    const documentPath = app.getPath('documents')
    const filePath = join(documentPath, 'timestamps.csv')
    
    // Writes the timestamp to the file
    fs.appendFile(filePath, `Language at: ${timeStamp};`, (err) => {
      if (err) {
        console.error('Error saving timestamp:', err)
      }
      console.log('Language Timestamp saved:', timeStamp)
    })
  })

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
