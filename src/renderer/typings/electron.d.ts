/**
 * Should match main/preload.ts for typescript support in renderer
 */
export default interface ElectronApi {
  log: (msg: string) => void;
  readDir: (dir: string, func: (dir: string, files: string[]) => void) => void;
}

declare global {
  interface Window {
    api: ElectronApi;
  }
}
