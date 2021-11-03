let n = 5; 
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    string += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);