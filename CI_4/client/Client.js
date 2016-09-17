class Client{
  constructor(xx, yy){
    this.socket = io();

    /*
     * (đọc bên index.js trước)
     * socket.on(..) là một sự kiện, gồm 2 phần là tên của tin nhắn (ở đây là 'connected')
     * và một function sẽ được gọi mỗi khi máy người chơi nhận được tin nhắn có tên đó từ server
     */
    this.socket.on('connected', function(msg){
      alert(msg);
    });
    this.socket.on('newtank', function(msg){
      TankOnline.inputControllers.push(
        new InputController(
          {
            up    : Phaser.KeyCode.UP,
            down  : Phaser.KeyCode.DOWN,
            left  : Phaser.KeyCode.LEFT,
            right : Phaser.KeyCode.RIGHT,
            fire  : Phaser.KeyCode.SPACEBAR
          },
          new TankController(TankOnline.inputControllers.length, msg['posX'], msg['posY'],
                          TankOnline.tankGroup, TankOnline.bulletGroup)
        )
      );
    });

    this.socket.emit('newtankPosition', {posX : xx, posY : yy});


    /*
     * Đến đây ta biết cách gửi tin nhắn từ server đến client rồi, vậy muốn gửi
     * tin nhắn từ client đến server thì làm thế nào?
     * rất đơn giản ta cũng dùng socket.emit() y như phần code ở server
     * socket đơn giản là 1 cầu nối giữa client và server, cứ 1 bên emit thì bên kia sẽ nhận đc.
     */
  }
}
