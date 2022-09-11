let shah = [];
let shahBorad = [];
let b = "black";
let w = "white";

for (let i = 0; i < 8; i++) {
  shah = [];
  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 == 0) {
      shah[j] = b;
    } else {
      shah[j] = w;
    }
  }
  shahBorad[i] = shah;
}

console.log(shahBorad);
