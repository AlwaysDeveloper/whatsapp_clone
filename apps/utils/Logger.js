import { CloudWatchLogger } from '../aws';

export async function loggerInitilizer() {
    const logger = new CloudWatchLogger();
}