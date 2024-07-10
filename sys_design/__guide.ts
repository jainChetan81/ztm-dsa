/*
  1. Functional & Non-functional requirement
  2. state, events and props
  3. API data and its structure & static and API data
  4. performance: colocation of state, URL as state, avoiding rerendering, preserving data on reload
  5. accessibility
  6. advance perf: like RSC
*/

// learn CODE for abortcontroller, Debounce, Throttle
//Functional & Non-functional requirement
// vanilla ts code for debounce
function debounce = (fn: Function, delay: number) => {
  let timeout: NodeJS.Timeout | null;
  return function(...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args)
    }, delay);
  };
};
function throttle(func: Function, limit: number) {
  let lastCall = 0;
  return function(...args: any[]) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
};
export function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
const fetchSuggestions = (query: string) => {
  if (controller) controller.abort();
  // Create a new AbortController for the new request
  const newAbortController = new AbortController();
  const signal = newAbortController.signal;
  controller.current = newAbortController;

  fetch(`https://api.example.com/autocomplete?query=${query}`, { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error('Fetch error:', err));
};
let delay = 1000; // Initial delay in ms
const maxDelay = 10000; // Maximum delay in ms

const poll = (fn: Function, delay: number, maxDelay: number) => {
  setTimeout(async () => {
    await fn();
    if (delay < maxDelay) {
      poll(fn, delay * 2, maxDelay); // Increase delay
    } else {
      poll(fn, maxDelay, maxDelay); // Use max delay
    }
  }, delay);
};
