import {readFileSync} from "fs";

const spelledNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

// read the data file
let data = String(readFileSync('./data/day-1/data'));

spelledNumbers.forEach((spelledNumber, index) => {
    data = data.replaceAll(spelledNumber, `${spelledNumber}${index}${spelledNumber}`);
})

const numberLists = data.split('\n').map((line) => (line.split('').filter((char) => (!Number.isNaN(Number(char))))))

let result = 0;
for(const numberList of numberLists) {
    result +=Number(numberList[0] + numberList[numberList.length -1])
}

console.error(result);