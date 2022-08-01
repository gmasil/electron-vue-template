/*
   Add all your exposed Electron API's here.
   The purpose of this is to get static analysis in Vue files without additional plug-ins.
 */
import type { IpcRenderer } from "electron";

const ipcRenderer: IpcRenderer = window.electron.ipcRenderer;

export { ipcRenderer };
