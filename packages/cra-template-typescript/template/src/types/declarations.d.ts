declare let NODE_ENV: any;
declare let COMMITDATE: any;
declare let COMMITHASH: any;
declare let BRANCH: any;
declare let API_URL: any;
declare let SSR_INITIAL_STATE: any;

declare module '*.json';
declare module '*.ttf';
declare module '*.otf';

interface IAnyValues {
  [propName: string]: any;
}
