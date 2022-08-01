import type { LogFunction, ReadDirFunction } from "../main/api/types";

const log: LogFunction = window.api.log;
const readDir: ReadDirFunction = window.api.readDir;

export { log, readDir };
