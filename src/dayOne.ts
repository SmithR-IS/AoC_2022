import { readFileSync } from 'fs';

export function dayOne(filepath: string): void {
    const file: string[] = readFileSync(filepath, 'utf-8').split("\n");
    let topMarker: number = 0;
    let elfArray: number[] = [];
    
    file.forEach((value, index) => {
        if (value === ' ') {
            const subList = file.slice(topMarker, index).map(str => { return Number(str) }).reduce((a, b) => a + b);
            elfArray.push(subList);
            topMarker = index++;
        }
    })
    elfArray.sort((a, b) => b - a)

    console.log(elfArray[0])
    console.log(elfArray.splice(0, 3).reduce((a, b) => a + b))
}