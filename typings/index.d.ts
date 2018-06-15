declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  WebFont: any;
}

declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
