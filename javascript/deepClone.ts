function deepClone<T>(item: T, seen = new WeakMap<object, any>()): T {
	// Handle primitives and null
	if (item === null || typeof item !== "object") {
		if (typeof item === "function") {
			return item;
		}
		return item;
	}

	// Handle circular references
	if (seen.has(item as object)) {
		return seen.get(item as object);
	}

	// Handle Date objects
	if (item instanceof Date) return new Date(item.getTime()) as unknown as T;
	// Handle RegExp objects
	if (item instanceof RegExp) return new RegExp(item) as unknown as T;
	// Handle Arrays
	if (Array.isArray(item)) {
		let result = [] as T;
		seen.set(item as object, result);
		result = item.map((element) => deepClone(element, seen)) as unknown as T;
		return result;
	}
	// Handle Map
	if (item instanceof Map) {
		let result = new Map();
		seen.set(item as object, result);
		item.forEach((value, key) => {
			result.set(key, deepClone(value, seen));
		});
		return result as unknown as T;
	}
	// Handle Set
	if (item instanceof Set) {
		let result = new Set();
		seen.set(item as object, result);
		item.forEach((value) => {
			result.add(deepClone(value, seen));
		});
		return result as unknown as T;
	}
	const result = {} as T;
	seen.set(item as object, result);
	for (const key in item) {
		result[key] = deepClone(item[key], seen);
	}

	return result;
}
const circularObj = {
	a: 1
};
circularObj.a = circularObj;

const obj2 = deepClone(circularObj);

console.log(obj2);
