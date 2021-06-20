import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const cleanObject = (object: Object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    // @ts-ignore
    const value = object[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callBack: () => void) => {
  useEffect(() => {
    callBack();
  }, []);
};

export const useDebounce = <V>(value: V, delay: number) => {
  let [debunce, setDebunce] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebunce(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debunce;
};
