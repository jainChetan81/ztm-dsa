type Fn = (...params: number[]) => number;

function memo(fn: Fn): Fn {
  const cache: any = {};
  return function (...args) {
    const key = `${args.join(",")}`;
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
let callCount = 0;
const memoizedFn = memo(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1

async function sleep(millis: number): Promise<void> {
  return new Promise((res) =>
    setTimeout(() => {
      console.timeEnd("111");
      res();
    }, millis),
  );
}
console.time("111");
sleep(2000);

function cancellable(fn: Fn, args: JSONValue[], t: number) {
  const timer = setTimeout(() => {
    fn(...args);
  });
  const cancelFn = function () {
    clearTimeout(timer);
  };
  return cancelFn;
}
console.time("222");
// console.log(cancellable(console.log, ["Hello, World!"], 2000));
console.log(
  cancellable(
    function (a, b) {
      console.timeEnd("222");
      return a + b;
    },
    [1, 24],
    3000,
  )(),
);

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

function cancellableInterval(fn: Fn, args: JSONValue[], t: number): Function {
  fn(...args);
  const timer = setInterval(() => fn(...args), t);
  const cancelFn = () => clearInterval(timer);
  return cancelFn;
}

console.log(cancellableInterval((x) => x * 2, [4], 2000));
type FnTimeLimit = (...params: any[]) => Promise<any>;

function timeLimit(fn: FnTimeLimit, t: number): FnTimeLimit {
  return async function (...args) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej("Time Limit Exceeded");
      }, t);
      fn(...args).then(res, rej);
    });
  };
}
