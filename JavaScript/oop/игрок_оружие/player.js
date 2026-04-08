class Player {
    constructor(name, health) {
       this.name = name; 
       this.health = health;
       this.weapon = null;
    }
    equip(weapon) {
        this.weapon = weapon;
    }
    attack(player) {
        player.health -= this.weapon?.damage ?? 0;
        if (!this.weapon) {
            console.log("Атака не возможна")
        }
        if (player.health <= 0) {
            console.log(`${this.name} убил ${player.name}`)
        }
    }

}

class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}

const player2 = new Player("John", 100);
const player1 = new Player("Noha", 100);
const sword = new Weapon("Sword", 100);

player1.equip(sword);
player1.attack(player2);
console.log(player2.health)