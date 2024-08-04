declare namespace NodeJS {
  export interface ProcessEnv {
    MONGODB_URI: string;
    JWT_SECRET_TOKEN: string;
    JWT_REFRESH_TOKEN: string;
  }
}