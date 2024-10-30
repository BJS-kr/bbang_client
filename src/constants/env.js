import dotenv from 'dotenv';

dotenv.config();

export const HOST = process.env.HOST || 'localhost';
export const PORT = process.env.PORT || '5555';
export const CLIENT_VERSION = process.env.CLIENT_VERSION || '1.0.0';

export const DB1_NAME = process.env.DB1_NAME;
export const DB1_USER = process.env.DB1_USER;
export const DB1_PASSWORD = process.env.DB1_PASSWORD;
export const DB1_HOST = process.env.DB1_HOST;
export const DB1_PORT = process.env.DB1_PORT;

export const DB2_NAME = process.env.DB2_NAME;
export const DB2_USER = process.env.DB2_USER;
export const DB2_PASSWORD = process.env.DB2_PASSWORD;
export const DB2_HOST = process.env.DB2_HOST;
export const DB2_PORT = process.env.DB2_PORT;
