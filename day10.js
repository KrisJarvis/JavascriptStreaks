process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}
isFactor = (a, b) => a % b === 0;

function main() {
  var n_temp = readLine().split(" ");
  var n = parseInt(n_temp[0]);
  var m = parseInt(n_temp[1]);
  a = readLine().split(" ");
  a = a.map(Number);
  b = readLine().split(" ");
  b = b.map(Number);

  var results = [];
  for (var i = a[n - 1]; i <= b[0]; i++) {
    if (a.every((x) => isFactor(i, x)) && b.every((x) => isFactor(x, i)))
      results.push(i);
  }

  console.log(results.length);
}
