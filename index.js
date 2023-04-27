// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require('./src/Fighter')

const heracles = new Fighter('🧔 Heracles', 20, 6);
const nemeanLion = new Fighter('🦁 Nemean Lion', 11, 13);


let round = 1;

do{
    //instructions
    console.log(`Round #${round}`);
    heracles.fight(nemeanLion);
    if(nemeanLion.isAlive()) {
        nemeanLion.fight(heracles);
    }
    round++;

} while(heracles.isAlive() && nemeanLion.isAlive())


const winner = heracles.isAlive() ? heracles : nemeanLion;
const loser = heracles.isAlive() ? nemeanLion : heracles;

console.log(`${loser.name} is dead`);
console.log(`${winner.name} wins ${winner.life} HP`);


//heracles.fight(nemeanLion);
//nemeanLion.fight(heracles); 

