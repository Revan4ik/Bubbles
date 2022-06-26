let level = 1
class Level {
    constructor() {
        this.level = level
        this.p = document.querySelector("p")
    }
    addCount() {
        level++
        this.p.innerHTML = level - 1
    }
    Zero() {
        level = 1
        this.p.innerHTML = 0
    }
    getLevel() {
        return this.level
    }
}