function miniMaxSum(arr) {
  arr = arr.sort((a, b) => a - b);
  let min = arr.reduce((accum, i, index) => {
    if (index !== arr.length - 1) {
      accum += i;
    }

    return accum;
  }, 0);
  let max = arr.reduce((accum, i, index) => {
    if (index !== 0) {
      accum += i;
    }
    return accum;
  }, 0);
  console.log(min, max);
  return [min, max];
}

function A() {
  let str1 = "shivaa";
  let str2 = "shiavv";
  if (str1.length === str2.length) {
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < str1.length; i++) {
      if (obj1[str1[i]]) {
        obj1[str1[i]] = obj1[str1[i]] + 1;
      } else {
        obj1[str1[i]] = 1;
      }
      if (obj2[str2[i]]) {
        obj2[str2[i]] = obj2[str2[i]] + 1;
      } else {
        obj2[str2[i]] = 1;
      }
    }
    let temp = 0;
    for (let key of Object.keys(obj1)) {
      if (!obj1[key] || !obj2[key] || obj1[key] !== obj2[key]) {
        temp = temp + 1;
        break;
      }
    }
    temp === 0 ? console.log("true") : console.log("false");
  } else {
    console.log("false");
  }
}
