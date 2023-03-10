"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}


function pickingNumbers(a) {
  const sorted = a.sort((a, b) => a - b);
  let checkNumber = sorted[0];
  let group = 0;

  return Math.max(
    ...sorted.reduce((target, number) => {
      !(Math.abs(number - checkNumber) <= 1) &&
        ((checkNumber = number), group++);

      target[group] ? target[group]++ : target.push(1);

      return target;
    }, [])
  );
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((aTemp) => parseInt(aTemp, 10));

  const result = pickingNumbers(a);

  ws.write(result + "\n");

  ws.end();
}
