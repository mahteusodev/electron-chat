const { app, BrowserWindow, Notification } = require('electron');
const path = require('path');


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