class Game {
    constructor() {
        this.lvl = new Level().getLevel()
        this.interval = 900 / this.lvl
    }
    start() {
        this.balls = []
        this.intervalStart = setInterval(() => {
            this.balls.push(new Controlball().init())
        }, this.interval)
    }
    gameOver() {
        new Level().Zero()
        clearInterval(this.intervalStart)
        this.balls.forEach((Ball) => {
            Ball.destroyBall();
        })

    }
}
new Game().start()