export interface SiwaOptions {
  endpoint: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isStr(obj: any): obj is string {
  return typeof obj === 'string';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNum(obj: any): obj is number {
  return typeof obj === 'number';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isObj(obj: any): obj is Record<string, any> {
  return typeof obj === 'object' && obj !== null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isArrayOf<T>(obj: any, checkFn: (x: T) => x is T): obj is T[] {
  return Array.isArray(obj) && obj.every(checkFn);
}
