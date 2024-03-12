import React, { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? defaultValue : JSON.parse(defaultValue);
  });

  useEffect(() => {
    const listener = (e) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue) => {
    setValue((currentValue) => {
      const result =
        typeof currentValue === "function" ? currentValue(newValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };
  return [value, setValueInLocalStorage];
};

export default useLocalStorage;
