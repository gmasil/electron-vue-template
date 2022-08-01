import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

contextBridge.exposeInMainWorld("api", {
  log: (msg: string) => {
    ipcRenderer.send("log", msg);
  },
  readDir: (dir: string, func: (dir: string, files: string[]) => void) => {
    ipcRenderer.on(
      "response-readdir",
      (_event: IpcRendererEvent, arg: { dir: string; files: string[] }) =>
        func(arg.dir, arg.files)
    );
    ipcRenderer.send("request-readdir", dir);
  },
});
