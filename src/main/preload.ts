import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";
import { ElectronApi, FileCallback } from "./api/types";

contextBridge.exposeInMainWorld("api", {
  log: (msg: string) => {
    ipcRenderer.send("log", msg);
  },
  readDir: (dir: string, func: FileCallback) => {
    ipcRenderer.on(
      "response-readdir",
      (_event: IpcRendererEvent, arg: { dir: string; files: string[] }) =>
        func(arg.dir, arg.files)
    );
    ipcRenderer.send("request-readdir", dir);
  },
} as ElectronApi);
