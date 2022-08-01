/*
   Add all your exposed Electron API's here.
   The purpose of this is to get static analysis in Vue files without additional plug-ins.
 */

const log: (msg: string) => void = window.api.log;
const readDir: (
  dir: string,
  func: (dir: string, files: string[]) => void
) => void = window.api.readDir;

export { log, readDir };
