import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) =>
  value === "" || value === undefined || value === null;
// TODO: 知识点对象类型
export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callBack: () => void) => {
  useEffect(() => {
    callBack();
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
