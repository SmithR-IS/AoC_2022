import { readFileSync } from 'fs';

enum handValues {
    A = 'Rock',
    B = 'Paper',
    C = 'Scissors',
    X = 'Rock',
    Y = 'Paper',
    Z = 'Scissors'
}

const choices = {
    Rock: {losesTo: 'Paper', winsAgainst: 'Scissors', value: 1},
    Paper: {losesTo: 'Scissors', winsAgainst: 'Rock', value: 2},
    Scissors: {losesTo: 'Rock', winsAgainst: 'Paper', value: 3}
}

export function dayTwo(filepath: string): void {
    const file: string[] = readFileSync(filepath, 'utf-8').split("\n");
    let totalScore: number = 0;

    file.forEach((value, index) => {
        const [ opponent, player ] = value.split(" ")
        totalScore += calculateWinnerAndReturnValue(opponent, player)
    })
    console.log(totalScore)
}

function calculateWinnerAndReturnValue(opponent: string, player: string): number {
    const opponentChoice = choices[handValues[opponent]]
    const playerValue = handValues[player]

    if (opponentChoice.winsAgainst === playerValue) {
        return 0 + choices[playerValue].value;
    }

    if (opponentChoice.losesTo === playerValue) {
        return 6 + choices[playerValue].value;
    }

    return 3 + choices[playerValue].value;
}
