class Controlball {
    constructor() {
        this.lvl = new Level().getLevel()
        this.size = 140 / Number(`1.${this.lvl}`)
        this.speed = 1 * this.lvl
        this.interval = 40
        this.count = 0
    }
    generatetheBall() {
        this.ball = new Ball(this.generateX(), this.size)
        this.ball.addEventListener('click', () => {
            this.lvl = new Level().addCount()
            this.destroy()
        })
    }
    init() {
        this.generatetheBall()
        this.moving()
        return this
    }
    moving() {
        let y = 0
        this.moveInterval = setInterval(() => {
            y += this.speed
            this.ball.style.top = `${y}px`
            if (y > window.innerHeight - this.size) {
                clearInterval(this.moveInterval)
                this.destroy()
                new Game().gameOver()
            }
        }, this.interval)
    }
    generateX() {
        this.num = Math.ceil(Math.random() * window.innerWidth) - this.size
        while (this.num < 0) this.num = Math.ceil(Math.random() * window.innerWidth) - this.size
        return this.num
    }
    destroy() {
        this.ball.remove();
        clearInterval(this.moveInterval);
        delete this;
    }
    
}