import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export const log = logger.info.bind(logger);
export const error = logger.error.bind(logger);
