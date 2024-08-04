declare module "diff-json-keys" { 
  export function runDiff(obj1: any, obj2: any, options?: any): any;
  export function runDiff(json?: any, jsonDiff?: any): any;
  export function runDiffObject(json?: any, jsonDiff?: any): any;
  export function runDiffArray(json?: any, jsonDiff?: any): any;
  export function checkIsObjectValue(value: any): boolean;
}