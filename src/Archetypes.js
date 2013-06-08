function createPlayer(inputProfile, playerColor, offsetY)
{
  var newPlayer = JSEngine.factory.createObject();
  newPlayer.components.player = new Player(newPlayer, inputProfile);
  newPlayer.components.cube = new Cube(newPlayer, { color:playerColor });
  newPlayer.position.y = 1;

  chaseCam = JSEngine.factory.createObject();
  chaseCam.position.set(0, 20, 40);
  chaseCam.components.camera = new Camera(chaseCam);
  chaseCam.components.camera.target = newPlayer;
  chaseCam.components.camera.sizeY = 0.5;
  chaseCam.components.camera.offsetY = offsetY;
}