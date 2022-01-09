import { useEffect, useState } from "react";

const defaultOptions = {
  defaultValue: "",
  interval: 1000,
};

export const useDebounce = (fn, options) => {
  const { defaultValue, interval } = { ...defaultOptions, ...options };
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    let timeout = setTimeout(() => {
      fn(value);
    }, interval);

    return () => clearTimeout(timeout);
  }, [value]);

  return { value, setValue };
};
