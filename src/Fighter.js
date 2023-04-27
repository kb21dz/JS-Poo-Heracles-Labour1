/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
    constructor (name, strength, dexterity) {
    this.name = name;
    this.strength =strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    console.log(`${this.name} has been created. It has ${this.life} HP`);
    }



fight(enemy) {
    let damage = this.generateRandomInteger(this.strength);
    let mitigatedDamage = damage - enemy.dexterity;
    if (mitigatedDamage > 0) {
        enemy.life = enemy.life - mitigatedDamage;
        if(enemy.life < 0) {
            enemy.life = 0;
            console.log(`${enemy.name} took ${mitigatedDamage} damage. It has ${enemy.life} HP`);
        } else {
            console.log(`${this.name}'s attacks failed!`);
        }
    }

}

generateRandomInteger(max) {
   return Math.floor(Math.random() * max + 1);
}

isAlive() {
    return this.life > 0;
}

}

module.exports = Fighter;