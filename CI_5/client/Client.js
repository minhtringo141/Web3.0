class Client{
  constructor(tankPosition){
    this.socket = io();
    this.socket.emit('newtankPosition', tankPosition);

    this.socket.on('newPlayerJoined', function(msg){
      TankOnline.onNewPlayerJoined(msg);
    });

    this.socket.on('listOtherTanks', function(msg){
      TankOnline.onReceivedTanksInfo(msg);
    });

    this.socket.on('playerTankMoved', function(msg){
      TankOnline.onPlayerTankMoved(msg);
    });

    //CI4
    this.socket.on('playerTankShoot', function(msg){
      TankOnline.onPlayerTankShoot(msg);
    });
    this.socket.on('playerGetShot', function(msg){
      TankOnline.onPlayerGetShot(msg);
    });

    this.socket.on('playerDisconnect', function(msg){
      TankOnline.onPlayerDisconnect(msg);
    });
  }

  move(msg){
    this.socket.emit('tankMoved', msg);
  }

  // CI4
  fire(msg){
    this.socket.emit('tankShoot', msg);
  }
  getShot(){
    this.socket.emit('tankGetShot', this.socket.id);
  }
  // CI4
}
