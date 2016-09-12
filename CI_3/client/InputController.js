class InputController{
  constructor(keymap, tankController){
    this.keymap = keymap;
    this.tankController = tankController;
  }

  update(){
    var direction = new Phaser.Point(0,0);
    if (TankOnline.keyboard.isDown(this.keymap.up)){
      direction.y = -1;
    }else if (TankOnline.keyboard.isDown(this.keymap.down)){
      direction.y = 1;
    }

    if (TankOnline.keyboard.isDown(this.keymap.left)){
      direction.x = -1;
    }else if (TankOnline.keyboard.isDown(this.keymap.right)){
      direction.x = 1;
    }
    var shooting = false;
    if (TankOnline.keyboard.isDown(this.keymap.shoot)){
      shooting = true;
    }


    this.tankController.move(direction);
    this.tankController.fire(shooting);




  }

}
