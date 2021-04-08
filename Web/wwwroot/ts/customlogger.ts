import { ILogger, LogLevel } from "@microsoft/signalr";

export class CustomLogger implements ILogger {
    log(logLevel: LogLevel, message: string) {
        // use this method for write logging in anywhere

        console.log(`${logLevel} :: ${message}`);
    }
}