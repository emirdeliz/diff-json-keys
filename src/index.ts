export function runDiff(json: any = {} as any, jsonDiff: any = {} as any) {
  const firstDiff = runDiffObject(json, jsonDiff);
  const secondDiff = runDiffObject(jsonDiff, json);

  console.log({
    firstDiff: JSON.stringify(firstDiff)
  })

  console.log({
    secondDiff: JSON.stringify(secondDiff)
  })

  return { ...firstDiff, ...secondDiff };
}

export function runDiffObject(json: any = {} as any, jsonDiff: any = {} as any) { 
   const diff = Object.keys(json).reduce(function (result: any, key: string) {
    const value = json[key];
    const isObjectValue = checkIsObjectValue(value);
    const isArrayValue = Array.isArray(value);

    if (isArrayValue) {
      const resultArr = runDiffArray(json[key], jsonDiff[key] || []);
      if (resultArr.length) {
        result[key] = resultArr;
      }
    } else if (isObjectValue) { 
      const resultObj = runDiffObject(json[key], jsonDiff[key] || {});
      if (Object.keys(resultObj).length) {
        result[key] = resultObj;
      }
    } else if (jsonDiff[key] === undefined) {
      result[key] = value;
    }
    return result;
  }, {});
  return diff;
}

export function runDiffArray(json: any = [], jsonDiff: any = []) {
  const diff = json.reduce(function (result: any, val: any, index: number) { 
    const isObjectValue = checkIsObjectValue(val);
    if (isObjectValue) {
      const resultObj = runDiffObject(val, jsonDiff[index]);
      if (Object.keys(resultObj).length) {
        result.push(resultObj);
      }
    } else if (jsonDiff[index] === undefined) { 
      result.push(val);
    }
    return result;
  }, []);
  return diff;
}

export function checkIsObjectValue(value: any) { 
  return typeof value === 'object';
}