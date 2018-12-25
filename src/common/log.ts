import log4js from "log4js";

export class Log {

    public static init() {
        log4js.configure("./log4js.config.json");
    }

    public static accessFatal(message: string): void {
        const log = log4js.getLogger("access");
        log.fatal(message);
    }
    public static accessError(message: string): void {
        const log = log4js.getLogger("access");
        log.error(message);
    }
    public static accessWarning(message: string): void {
        const log = log4js.getLogger("access");
        log.warn(message);
    }
    public static accessInfo(message: string): void {
        const log = log4js.getLogger("access");
        log.info(message);
    }
    public static accessDebug(message: string): void {
        const log = log4js.getLogger("access");
        log.debug(message);
    }
    public static accessTrace(message: string): void {
        const log = log4js.getLogger("access");
        log.trace(message);
    }

    public static systemFatal(message: string): void {
        const log = log4js.getLogger("access");
        log.fatal(message);
    }
    public static systemError(message: string): void {
        const log = log4js.getLogger("access");
        log.error(message);
    }
    public static systemWarning(message: string): void {
        const log = log4js.getLogger("access");
        log.warn(message);
    }
    public static systemInfo(message: string): void {
        const log = log4js.getLogger("access");
        log.info(message);
    }
    public static systemDebug(message: string): void {
        const log = log4js.getLogger("access");
        log.debug(message);
    }
    public static systemTrace(message: string): void {
        const log = log4js.getLogger("system");
        log.trace(message);
    }
}

export default Log;
