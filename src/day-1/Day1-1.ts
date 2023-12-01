import {readFileSync} from "fs";

// read the data file
const data = String(readFileSync('./data/day-1/data'));


const numberLists = data.split('\n').map((line) => (line.split('').filter((char) => (!Number.isNaN(Number(char))))))

let result = 0;
for(const numberList of numberLists) {
    result +=Number(numberList[0] + numberList[numberList.length -1])
}

console.error(result);