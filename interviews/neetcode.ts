class Unique {
	set: Set<number>;
	constructor() {
		this.set = new Set<number>();
	}
	add(num: number): boolean {
		if (this.set.has(num)) {
			return false;
		}
		this.set.add(num);
		return true;
	}
	remove(num: number): boolean {
		if (this.set.has(num)) {
			return false;
		}
		this.set.delete(num);
		return true;
	}
	getRandom(): number {
		const arr = Array.from(this.set);
		const randomIndex = Math.floor(Math.random() * arr.length);
		return arr[randomIndex];
	}
}

const unique = new Unique();
console.log(unique.add(1));
console.log(unique.add(1));
console.log(unique.add(2));
console.log(unique.add(3));
console.log(unique.getRandom());
