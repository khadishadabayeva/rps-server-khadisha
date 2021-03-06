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
            let winner = this.whoWins()

            if (winner != null) {
                winner = {
                    username: winner.username,
                    turn: winner.turn
                }
            }

            let matchResult = {
                winner: winner,
                players: [
                    {
                        username: this.player1.username,
                        turn: this.player1.turn
                    },
                    {
                        username: this.player2.username,
                        turn: this.player2.turn
                    }
                ]
            }

            this.player1.emit('matchResult', matchResult)
            this.player2.emit('matchResult', matchResult)
        }
    }

    finished () {
        return this.player1.turn && this.player2.turn
    }

    whoWins() {
        console.log('player1', this.player1.turn)
        console.log('player2', this.player2.turn)

        /*
            Programming task: Implement the game rules
            
            - this.player1.turn can be 'rock', 'paper', or 'scissors'
            - this.player2.turn can be 'rock', 'paper', or 'scissors'

            - return this.player1 if player1 wins
            - return this.player2 if player2 wins
            - return null if there is a draw
        */

        
        return null
    }
}

module.exports = Match