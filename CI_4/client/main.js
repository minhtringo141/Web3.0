var TankOnline = {
  config : {
    TANK_SPEED : 350,
    BULLET_SPEED : 700
  },
  map : [
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0],
   [0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
};

window.onload = function(){
  TankOnline.game = new Phaser.Game(window.innerWidth,
                                    window.innerHeight,
                                    Phaser.AUTO,
                                    '',
                                    {
                                      preload: preload,
                                      create: create,
                                      update: update
                                    }
                                  );
}

var preload = function(){
  //Tank textures
  TankOnline.game.load.image('tankDown', './images/tank_player1_down_c0_t1_s1.png');
  TankOnline.game.load.image('tankUp', './images/tank_player1_up_c0_t1_s1.png');
  TankOnline.game.load.image('tankRight', './images/tank_player1_right_c0_t1_s1.png');
  TankOnline.game.load.image('tankLeft', './images/tank_player1_left_c0_t1_s1.png');

  //Bullet textures
  TankOnline.game.load.image('bulletDown', './images/bullet_down.png');
  TankOnline.game.load.image('bulletUp', './images/bullet_up.png');
  TankOnline.game.load.image('bulletRight', './images/bullet_right.png');
  TankOnline.game.load.image('bulletLeft', './images/bullet_left.png');

  //Wall texture
  TankOnline.game.load.image('wall', './images/wall_steel.png');
}

var create = function() {


  TankOnline.game.physics.startSystem(Phaser.Physics.ARCADE);
  TankOnline.keyboard = TankOnline.game.input.keyboard;

  TankOnline.bulletGroup = TankOnline.game.add.physicsGroup();
  TankOnline.tankGroup = TankOnline.game.add.physicsGroup();
  TankOnline.wallGroup = TankOnline.game.add.physicsGroup();



  for(var i=0;i<TankOnline.map.length;i++){
    for(var j=0;j<TankOnline.map[i].length;j++){
      if(TankOnline.map[i][j] == 1){
        TankOnline.wallGroup.create(j*16, i*16, 'wall').body.immovable = true;
      }
    }
  }

  var newTankPosition = new Phaser.Point(
    Math.random()*window.innerWidth,
    Math.random()*window.innerHeight
  );

  TankOnline.inputControllers = [];
  TankOnline.inputControllers.push(
    new InputController(
      {
        up    : Phaser.KeyCode.UP,
        down  : Phaser.KeyCode.DOWN,
        left  : Phaser.KeyCode.LEFT,
        right : Phaser.KeyCode.RIGHT,
        fire  : Phaser.KeyCode.SPACEBAR
      },
      new TankController(
        TankOnline.inputControllers.length,
        newTankPosition.x,
        newTankPosition.y,
        TankOnline.tankGroup,
        TankOnline.bulletGroup)
    )
  );
  TankOnline.client = new Client(newTankPosition);

}


var update = function(){
  TankOnline.game.physics.arcade.collide(TankOnline.tankGroup, TankOnline.wallGroup);
  TankOnline.game.physics.arcade.collide(TankOnline.tankGroup, TankOnline.tankGroup);

  TankOnline.game.physics.arcade.overlap(TankOnline.bulletGroup,
                                          TankOnline.wallGroup,
                                          onBulletHitWall,
                                          null,
                                          this);


  TankOnline.game.physics.arcade.overlap(TankOnline.bulletGroup,
                                          TankOnline.tankGroup,
                                          onBulletHitTank,
                                          null,
                                          this);

  for(var i=0;i<TankOnline.inputControllers.length;i++){
    TankOnline.inputControllers[i].update();
  }
}

var onBulletHitWall = function(bulletSprite, wallSprite){
  bulletSprite.kill();
}

var onBulletHitTank = function(bulletSprite, tankSprite){
  if(bulletSprite.tankId != tankSprite.id){
    bulletSprite.kill();
    tankSprite.kill();
  }
}
/*
  Events
*/
TankOnline.otherTanks = {};
TankOnline.onNewPlayerJoined = function(msg){
  TankOnline.otherTanks[msg.id] = new TankController(
    msg.id,
    msg.x,
    msg.y,
    TankOnline.tankGroup,
    TankOnline.bulletGroup
  )
}

TankOnline.onReceivedTanksInfo = function(msg){
  for(key in msg){
    if (msg.hasOwnProperty(key)){
      TankOnline.otherTanks[msg[key].id] = new TankController(
        msg[key].id,
        msg[key].x,
        msg[key].y,
        TankOnline.tankGroup,
        TankOnline.bulletGroup
      )
    }
  }
}

TankOnline.onPlayerTankMoved = function(msg){
  if(TankOnline.otherTanks[msg.id]){
    TankOnline.otherTanks[msg.id].sprite.position = msg.position;
    TankOnline.otherTanks[msg.id].move(msg.direction);
  }
}

TankOnline.onPlayerDisconnect = function(msg){
  TankOnline.otherTanks[msg].xoa();
  delete otherTanks[msg];
}
