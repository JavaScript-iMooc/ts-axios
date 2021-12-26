export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'post'
  | 'POST'
  | 'head'
  | 'HEAD'
  | 'put'
  | 'PUT'
  | 'options'
  | 'OPTIONS'
  | 'patch'
  | 'PATCH';

export type AxiosRequestConfig = {
  readonly url: string;
  readonly method?: Method;
  readonly data?: any;
  readonly params?: any;
};
