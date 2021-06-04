class Match {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2

        // cancel the match requests
        this.player1.matchRequest = null
        this.player2.matchRequest = null

        this.player1.inMatch = true
        this.player2.inMatch = true

        this.player1.turn = null
        this.player2.turn = null
    }

    check() {
        if (this.finished()) {
            const result = this.whoWins()

            this.player1.emit('matchResult', {
                winner: result ? result.serialize() : null
            })
            this.player2.emit('matchResult', {
                winner: result ? result.serialize() : null
            })
        }
    }

    finished () {
        return this.player1.turn && this.player2.turn
    }

    whoWins() {
        console.log('player1', this.player1.turn)
        console.log('player2', this.player2.turn)

        
            // Programming task: Implement the game rules
            
            // this.player1.turn = ['rock', 'paper', 'scissors']
            // this.player2.turn = ['rock', 'paper', 'scissors']
            // if (this.player1.turn == this.player2.turn){
            //     return null
            // }
            // if (this.player1.turn == 'rock' & this.player2.turn == 'scissors') or (this.player1.turn == 'scissors' & this.player2.turn == 'paper') or (this.player1.turn == 'paper' & this.player2.turn == 'rock') {
            //     return this.player1
            // }
            // if (this.player2.turn == 'rock' & this.player1.turn == 'scissors') or (this.player2.turn == 'scissors' & this.player1.turn == 'paper') or (this.player2.turn == 'paper' & this.player1.turn == 'rock') {
            //     return this.player2
            // }

        return null
    }
}

module.exports = Match