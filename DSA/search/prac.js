let a = [
  435, 765, 32, 567, 73, 3, 43657, 78, 4, 57, 634, 3, 75, 45, 32, 46, 57765, 9,
];

let k = 507;
a.sort((a, b) => a - b);
// console.log(a);
// for (let i = 0; i <= a.length - 1; i++) {
//   if (a[i] === k) {
//     console.log(i);
//   }
// }

// while (a.length >= 1) {
//     let mid = Math.floor(a.length / 2);

//   if (a[mid] === k) {
//     console.log("found");
//     break
//   } else {
//     if(k<a[mid]){
//         a=a.slice(0,mid)
//     }else if(k>a[mid]){
//         a=a.slice(mid+1)
//     }
//   }
// }
// console.log("not found")

//---
let l = 0;
let r = a.length - 1;
while (l <= r) {
  let mid = Math.floor(l + r / 2);
  if (a[mid] === k) {
    console.log("found");
  } else if (k < a[mid]) {
    r = mid - 1;
  } else if (k > a[mid]) {
    l = +1;
  }
}

if (l > r) {
  console.log("Not found");
}

//-
let b = [2, 4, 6, 8, 10, 12, 16, 32];
for (let i = 0; i < b.length; i++) {
  if (b[i] & (b[i] - 1)) {
    console.log("true");
  } else {
    console.log(false);
  }
}
