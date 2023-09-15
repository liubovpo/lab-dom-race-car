window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }
  document.addEventListener('keydown', event => {
    console.log('down', event)
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
      game.player.directionX = -1
    } else if (event.code === 'KeyD' || event.code === 'ArrowRight') {
      game.player.directionX = 1
    }
    if (event.code === 'KeyW' || event.code === 'ArrowUp') {
      game.player.directionY = -1
    } else if (event.code === 'KeyS' || event.code === 'ArrowDown') {
      game.player.directionY = 1
    }
  })
  
  document.addEventListener('keyup', event => {
    console.log('up', event)
    if (
      event.code === 'KeyA' ||
      event.code === 'KeyD' ||
      event.code === 'ArrowLeft' ||
      event.code === 'ArrowRight'
    ) {
      game.player.directionX = 0
    }
    if (event.code === 'KeyW' || event.code === 'KeyS'|| event.code === 'ArrowUp'||event.code === 'ArrowDown') {
      game.player.directionY = 0
    }
  })
};
