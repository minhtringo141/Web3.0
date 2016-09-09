var TankOnline = {
  config : {
    TANK_SPEED : 350,
    BULLET_SPEED: 700
  }
};

window.onload = function(){
  TankOnline.game = new Phaser.Game(window.innerWidth,
                                    window.innerHeight,
                                    Phaser.AUTO,'',
                                    {
                                      preload: preload,
                                      create: create,
                                      update: update
                                    }
                                    );
}

var preload = function(){
  TankOnline.game.load.image('tankDown', './images/tank_player1_down_c0_t1_s1.png');
  TankOnline.game.load.image('tankUp', './images/tank_player1_up_c0_t1_s1.png');
  TankOnline.game.load.image('tankRight', './images/tank_player1_right_c0_t1_s1.png');
  TankOnline.game.load.image('tankLeft', './images/tank_player1_left_c0_t1_s1.png');

  TankOnline.game.load.image('bulletDown', './images/bullet_down.png');
  TankOnline.game.load.image('bulletUp', './images/bullet_up.png');
  TankOnline.game.load.image('bulletRight', './images/bullet_right.png');
  TankOnline.game.load.image('bulletLeft', './images/bullet_left.png');
}

var create = function(){
  TankOnline.game.physics.startSystem(Phaser.Physics.ARCADE);
  TankOnline.keyboard = TankOnline.game.input.keyboard;

  TankOnline.player = TankOnline.game.add.sprite(200, 200, 'tankDown');
  TankOnline.player2 = TankOnline.game.add.sprite(200, 400, 'tankDown');

  TankOnline.game.physics.arcade.enable(TankOnline.player);
  TankOnline.game.physics.arcade.enable(TankOnline.player2);

  TankOnline.player.anchor.set(0.5, 0.5);
  TankOnline.player2.anchor.set(0.5, 0.5);
}
var allowShooting1 = true;
var allowShooting2 = true;


var update = function(){
  // PLAYER 1
  if(TankOnline.keyboard.isDown(Phaser.KeyCode.DOWN)){
    TankOnline.player.body.velocity.y = TankOnline.config.TANK_SPEED;
    TankOnline.player.loadTexture('tankDown');
  }else if ( TankOnline.keyboard.isDown(Phaser.KeyCode.UP)){
    TankOnline.player.body.velocity.y = -TankOnline.config.TANK_SPEED;
    TankOnline.player.loadTexture('tankUp');
  }else{
    TankOnline.player.body.velocity.y = 0;
  }

  if (TankOnline.keyboard.isDown(Phaser.KeyCode.RIGHT)){
    TankOnline.player.body.velocity.x = TankOnline.config.TANK_SPEED;
    TankOnline.player.loadTexture('tankRight');
  }else if ( TankOnline.keyboard.isDown(Phaser.KeyCode.LEFT)){
    TankOnline.player.body.velocity.x = -TankOnline.config.TANK_SPEED;
    TankOnline.player.loadTexture('tankLeft');
  }else{
    TankOnline.player.body.velocity.x = 0;
  }

  if (TankOnline.keyboard.isDown(Phaser.KeyCode.SPACEBAR)){
    if ( allowShooting1 == true ){
      allowShooting1 = false;
      var texture1;
      var speed1;
      switch(TankOnline.player.key){
        case 'tankDown':
          texture1 = "bulletDown";
          speed1 = new Phaser.Point(0, TankOnline.config.BULLET_SPEED);
          break;
        case 'tankUp':
          texture1 = "bulletUp";
          speed1 = new Phaser.Point(0, -TankOnline.config.BULLET_SPEED);
          break;
        case 'tankLeft':
          texture1 = "bulletLeft";
          speed1 = new Phaser.Point(-TankOnline.config.BULLET_SPEED, 0);
          break;
        case 'tankRight':
        default:
          texture1 = "bulletRight";
          speed1 = new Phaser.Point(TankOnline.config.BULLET_SPEED, 0);
          break;
        }

        // create bullet1
        var bullet1 = TankOnline.game.add.sprite(TankOnline.player.position.x, TankOnline.player.position.y, texture1);
        TankOnline.game.physics.arcade.enable(bullet1);
        bullet1.anchor.set(0.5, 0.5);
        bullet1.body.velocity = speed1;

        // prevent tank from overheat
        setTimeout(function(){
          allowShooting1 = true;
        }, 200);
      }
    }


    // PLAYER 2
    if(TankOnline.keyboard.isDown(Phaser.KeyCode.A)){
      TankOnline.player2.body.velocity.x = -TankOnline.config.TANK_SPEED;
      TankOnline.player2.loadTexture('tankLeft');
    }else if (TankOnline.keyboard.isDown(Phaser.KeyCode.D)){
      TankOnline.player2.body.velocity.x = TankOnline.config.TANK_SPEED;
      TankOnline.player2.loadTexture('tankRight');
    }else{
      TankOnline.player2.body.velocity.x = 0;
    }

    if(TankOnline.keyboard.isDown(Phaser.KeyCode.W)){
      TankOnline.player2.body.velocity.y = -TankOnline.config.TANK_SPEED;
      TankOnline.player2.loadTexture('tankUp');
    }else if (TankOnline.keyboard.isDown(Phaser.KeyCode.S)){
      TankOnline.player2.body.velocity.y = TankOnline.config.TANK_SPEED;
      TankOnline.player2.loadTexture('tankDown');
    }else{
      TankOnline.player2.body.velocity.y = 0;
    }

    if(TankOnline.keyboard.isDown(Phaser.KeyCode.SHIFT)){
      if(allowShooting2 == true){
        allowShooting2 = false;
        var texture2;
        var speed2;
        switch(TankOnline.player2.key){
          case 'tankDown':
            texture2 = 'bulletDown';
            speed2 = new Phaser.Point(0, TankOnline.config.BULLET_SPEED);
            break;
          case 'tankUp':
            texture2 = 'bulletUp';
            speed2 = new Phaser.Point(0, -TankOnline.config.BULLET_SPEED);
            break;
          case 'tankLeft':
            texture2 = 'bulletLeft';
            speed2 = new Phaser.Point(-TankOnline.config.BULLET_SPEED, 0);
            break;
          default:
            texture2 = 'bulletRight';
            speed2 = new Phaser.Point(TankOnline.config.BULLET_SPEED, 0);
          }

          // create bullet2
          var bullet2 = TankOnline.game.add.sprite(TankOnline.player2.position.x, TankOnline.player2.position.y, texture2);
          TankOnline.game.physics.arcade.enable(bullet2);
          bullet2.anchor.set(0.5, 0.5);
          bullet2.body.velocity = speed2;

          // prevent tank from overheat
          setTimeout(function(){
            allowShooting2 = true;
          }, 200);
        }

      }

}
