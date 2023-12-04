import {readFileSync} from "fs";

// read the data file
const data = String(readFileSync('./data/day-2/data'));

const maxAmountRed = 12;
const maxAmountGreen = 13;
const maxAmountBlue = 14;

type Game = {
    gameId: number,
    blue: number,
    red: number,
    green: number
}
//
const games: Game[]  =data.split('\n').map((line) => {
    const gameId = Number(line.split('Game ')[1].split(':')[0]);
    let blue = 0;
    let red =  0;
    let green = 0;
    line.split(': ')[1].split('; ').forEach((pull) => {
        pull.split(', ').forEach((colorPull) => {
            const [amountString, color] = colorPull.split(' ');
            const amount = Number(amountString);
            if(color === 'blue' && amount > blue) {
                blue = amount;
            } else if(color === 'green' && amount > green) {
                green = amount;
            } else if(color === 'red' && amount > red) {
                red = amount;
            }
        })
    })
    return {gameId, blue, red, green}
});

let result = 0;

games.forEach((game) => {
    if(game.blue <= maxAmountBlue && game.red <= maxAmountRed && game.green <= maxAmountGreen) {
        result += game.gameId
    }
})

console.error(result);