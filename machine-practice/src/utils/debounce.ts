const debounce = (func: Function, delay: number) => {
  let timeoutId: number | undefined;
  return function(this: unknown, ...args: unknown[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default debounce;
