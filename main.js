const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#fff',
        webPreferences: {
            nodeIntegration: false
        }
    });

    win.loadFile('index.html');
}

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

app.whenReady().then(() => {
    createWindow();
    const notification = new Notification(
        {title: 'Hello!',
         body: 'Welcome to my app'
        });
    notification.show();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});