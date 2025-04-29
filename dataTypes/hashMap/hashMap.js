class HashTable {
  constructor(n) {
    this.array = new Array(n);
    this.size = n;
  }

  hash(key) {
    let index;
    for (let i = 0; i < key.length; i++) {
      index = index + key.charCodeAt(i);
    }
    return index % 50;
  }

  set(key, value) {
    let index = this.hash(key);
    let bucket = this.array[index];
    if (bucket) {
      let item = bucket.find((item) => item[0] === key);
      if (item) {
        item[1] = value;
      } else {
        bucket.push([key, value]);
      }
    } else {
      this.array[index] = [[key, value]];
    }
    return this.array;
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.array[index];
    if (!bucket) {
      return "item not found";
    }
    let item = bucket.find((item) => item[0] === key);
    return item && item[1] ? item[1] : "not found";
  }

  delete(key) {
    let index = this.hash(key);
    let bucket = this.array[index];
    if (!bucket) {
      return "item not found";
    }
    let item = bucket.find((item) => item[0] === key);
    if (!item) {
      return "item not found";
    }
    this.array[index] = bucket.filter((i) => i[0] !== key);
    return `deleted ${key}`;
  }
}

let Obj = new HashTable(10);

console.log(Obj.set("name", "Shiva"));
console.log(Obj.set("age", 25));
console.log(Obj.set("educ", "B.Tech"));
console.log(Obj.set("location", "Bng"));
console.log(Obj.set("base", "10th"));

console.log(Obj.get("name"));

console.log(Obj.delete("base"));
console.log(Obj.set("name", "Chinni"));
console.log(Obj.get("base"));
