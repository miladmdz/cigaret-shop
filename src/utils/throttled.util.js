const createThrottledRunner = (fn, delay = 300) => {
  let lastRun = 0;
  let timeout = null;

  return function (...args) {
    const now = Date.now();
    const remaining = delay - (now - lastRun);

    if (remaining <= 0) {
      lastRun = now;
      fn(...args);
    } else {
      if (timeout) return;

      timeout = setTimeout(() => {
        lastRun = Date.now();
        timeout = null;
        fn(...args);
      }, remaining);
    }
  };
};

export { createThrottledRunner };
