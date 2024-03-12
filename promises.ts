export default function promiseAll<T extends readonly unknown[] | []>(
  iterable: T,
): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }> {
  return new Promise((res, rej) => {
    let totalPromise = iterable.length;
    const results: any = new Array(totalPromise);

    if (iterable.length === 0) {
      return res(results);
    }

    iterable.forEach(async (item, idx) => {
      try {
        const rizz = await item;
        results[idx] = rizz;
        totalPromise--;
        if (totalPromise === 0) {
          return res(results);
        }
      } catch (err: unknown) {
        rej(err);
      }
    });
  });
}

// const p0 = Promise.resolve(2);
// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 10);
// });
// promiseAll([p0, p1]).then((ans) => console.log(ans)); // [2, 3]

function promiseRace<T extends readonly unknown[] | []>(
  iterable: T,
): Promise<Awaited<T[number]>> {
  return new Promise((res, rej) => {
    let totalPromise = iterable.length;
    if (totalPromise === 0) {
      return;
    }
    iterable.forEach((item) => {
      if (item instanceof Promise)
        item
          .then((result) => {
            return res(result);
          })
          .catch((err) => {
            return res(err);
          });
      else {
        if (totalPromise === 1) return res(item);
      }
    });
  });
}
const p0 = Promise.resolve(42);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
});

promiseRace([p0, p1]).then((ans) => console.log(ans)); // 42

const p3 = 2;
promiseRace([p3, Promise.reject(3)]).then((ans) =>
  console.log(typeof ans, ans),
); // 2
