class Player {
    constructor(_name, _health = 100, _power = 10) {
        this.name = _name;
        this.health = _health;
        this.power = _power;
    }

    hit = (power) => {
        this.health -= power;
    }

    useItem = (item) => {
        if (item.health) {
            this.health += item.health;
        }else if (item.power) {
            this.power += item.power;
        }
    }

    showStatus = () => {
        console.log(`${this.name}: HEALTH = ${this.health}, POWER = ${this.power}`);
    }
}

class ShootingGame{
    constructor(_player1, _player2) {
        this.player1 = _player1;
        this.player2 = _player2;
    }

    getRandomItem = () => {
        let healthRandom = Math.random() >= 0.5 ? 10 : 0;
        let powerRandom = Math.random() >= 0.5 ? 10 : 0;

        return Math.random() >= 0.5 ? {health: healthRandom} : {power : powerRandom};
    } 

    start = () => {
        while (this.player1.health > 0 && this.player2.health > 0) {
            // Satus pemain
            this.player1.showStatus();
            this.player2.showStatus();
            // Dapat item atau tidak
            const itemPlayer1 = this.getRandomItem();
            const itemPlayer2 = this.getRandomItem();
            // Menggunakan item yang didapatkan
            this.player1.useItem(itemPlayer1);
            this.player2.useItem(itemPlayer2);
            console.log(this.player1.name, itemPlayer1);
            console.log(this.player2.name, itemPlayer2);
            // Player menembak
            this.player1.hit(this.player2.power);
            this.player2.hit(this.player1.power);
        }

        if (this.player1.health <= 0) {
            console.log(`${this.player2.name} MENANG!`);
        } else {
            console.log(`${this.player1.name} MENANG!`);
        }
    } 
}

let player1 = new Player("Indra");
let player2 = new Player("Ade");

let game = new ShootingGame(player1, player2);
game.start();