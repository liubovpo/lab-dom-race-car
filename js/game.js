class Game {
    constructor(){
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')
        this.height = 600;
        this.width = 500;
        this.player = new Player(this.gameScreen,200,500,100,150)
        this.obstacles = [];
        this.score = 0;
        this.lives = 3
        this.gameIsOver = false;
    }

    start(){
        this.startScreen.style.display = "none"
        this.gameEndScreen.style.display = 'none'
        this.gameScreen.style.display = "block"
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.gameLoop()
    }

    gameLoop(){
        this.update()
        if (this.gameOver) {
            this.gameScreen.style.display = 'none'
            this.gameEndScreen.style.display = 'block'
          } else {
            window.requestAnimationFrame(() => this.gameLoop())
          }
    }

    update(){
        player.move()
        
    }
}