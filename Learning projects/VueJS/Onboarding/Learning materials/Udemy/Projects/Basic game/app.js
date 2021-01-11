new Vue ({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 50,
        gameIsRunning: false,
        playerHealthColor: 'green',
        monsterHealthColor: 'green',
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.playerHealthColor='green';
            this.monsterHealthColor='green';
            this.turns=[];
        },
        attack: function() {

            var damage = this.calculateDamage(3, 10);

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });

            //Assign the required damage and reduce the health of the monster and player accordingly

            this.monsterHealth = this.monsterHealth - damage;

            if(this.checkWin()) {
                return;
            }

            this.monsterAttack();

            if(this.checkWin());

            this.updateHealthColor();

        },

        specialAttack: function() {
            var damage = this.calculateDamage(10, 20)
            this.monsterHealth = this.monsterHealth - damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage
            })

            if(this.checkWin()) {
                return;
            }

            this.monsterAttack();
            this.updateHealthColor();

        if(this.checkWin());
        },

        heal: function() {
            this.playerHealth += 10;
            if(this.playerHealth > 100) {
                this.playerHealth = 100
            }

            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for ' + 10
            })

            this.monsterAttack();
            this.updateHealthColor();
        },

        giveUp: function() {
            this.gameIsRunning = false;
        },

        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random()*max)+1, min);
        },

        monsterAttack: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth-=damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            })
        },

        checkWin: function() {
            if(this.monsterHealth <= 0) {
                if(confirm("You won! New game?")) {
                    this.startGame();
                }
                else {
                this.gameIsRunning = false;
                }
                return true;
            }

            if(this.playerHealth <= 0) {
                if(confirm("You lost! New game?")) {
                    this.startGame();
                }
                else {
                this.gameIsRunning = false;
                }
                return true;
            }

            return false;
        },

        updateHealthColor: function() {
            if(this.monsterHealth > 0 && this.monsterHealth < 30) {
                this.monsterHealthColor = 'red';
            }
            else if(this.monsterHealth >= 30 && this.monsterHealth < 75) {
                this.monsterHealthColor = 'orange';
            }
            else {
                this.monsterHealthColor = 'green';
            }

            if(this.playerHealth > 0 && this.playerHealth < 30) {
                this.playerHealthColor = 'red';
            }
            else if(this.playerHealth >= 30 && this.playerHealth < 75) {
                this.playerHealthColor = 'orange';
            }
            else {
                this.playerHealthColor = 'green';
            }
        }
    }
});