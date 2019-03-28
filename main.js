const { app, BrowserWindow, session } = require("electron");

let win;

function createWindow() {
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders["User-Agent"] =
      " Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.128 Safari/537.36";
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });

  win = new BrowserWindow({ show: false });
  win.maximize();
  win.show();

  win.loadURL("https://web.whatsapp.com/");

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
