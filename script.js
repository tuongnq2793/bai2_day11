const arr = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3, 2];

const count = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

for (let key in count) {
  console.log(key + " xuất hiện " + count[key] + " lần");
}
