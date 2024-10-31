import pino from 'pino';

const logger = pino({
  level: 'info',
});

export const log = logger.info.bind(logger);
export const error = logger.error.bind(logger);
