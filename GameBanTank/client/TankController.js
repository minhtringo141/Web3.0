class TankController{
  constructor(x, y, group){
    this.sprite = group.create(x, y, 'tankDown');
    TankOnline.game.physics.arcade.enable(this.sprite);
    this.sprite.anchor.set(0.5, 0.5);
    this.allowShooting = true;
  }

  move(direction){
    if(direction.y > 0){
      this.sprite.body.velocity.y = TankOnline.config.TANK_SPEED;
      this.sprite.loadTexture('tankDown');
    }else if ( direction.y < 0){
      this.sprite.body.velocity.y = -TankOnline.config.TANK_SPEED;
      this.sprite.loadTexture('tankUp');
    }else{
      this.sprite.body.velocity.y = 0;
    }

    if (direction.x > 0){
      this.sprite.body.velocity.x = TankOnline.config.TANK_SPEED;
      this.sprite.loadTexture('tankRight');
    }else if ( direction.x < 0){
      this.sprite.body.velocity.x = -TankOnline.config.TANK_SPEED;
      this.sprite.loadTexture('tankLeft');
    }else{
      this.sprite.body.velocity.x = 0;
    }
  }

  fire(shooting){

    if (shooting == true && this.allowShooting == true){


        var texture1;
        var speed1;
        switch(this.sprite.key){
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
        var bullet1 = TankOnline.bulletGroup.create(this.sprite.position.x, this.sprite.position.y, texture1);
        TankOnline.game.physics.arcade.enable(bullet1);
        bullet1.anchor.set(0.5, 0.5);
        bullet1.body.velocity = speed1;
        this.allowShooting = false;

        // prevent tank from overheat
        setTimeout(function(){
          this.allowShooting = true;
        }.bind(this), 200);
      }

  }
}
