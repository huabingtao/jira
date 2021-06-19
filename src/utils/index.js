import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callBack) => {
  useEffect(() => {
    callBack();
  }, []);
};

export const useDebounce = (value, delay) => {
  let [debunce, setDebunce] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebunce(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debunce;
};
