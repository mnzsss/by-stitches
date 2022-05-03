import { ObjectOf } from './ObjectOf';

export type ObjectWith<T> = ObjectOf<any> & T;
