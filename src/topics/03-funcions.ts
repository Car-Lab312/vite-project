
function addNumbers(a: number, b:number){
    return a + b;
}

const addNumbersArrow = (a: number, b: number):string => {
    return `${ a + b}`;
}

function multiply( firstNumber: number, secoNumber?: number, base: number = 2 ){
    return firstNumber * base;
}


// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplayResult: number = multiply(5);
// console.log({result, result2, multiplayResult})

interface Character{
    name: string;
    hp: number;
    showhp: () => void;
}

const healCharacter = (character, amount: number) =>{
    
    character.hp += amount;

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showhp(){
        console.log(`Puntos de vida ${ this.hp }`);
    }
}

healCharacter( strider, 10);
healCharacter( strider, 100);

strider.showhp();

export {};