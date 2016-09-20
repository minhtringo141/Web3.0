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

    this.socket.on('playerDisconnect', function(msg){
      TankOnline.onPlayerDisconnect(msg);
    });
  }

  move(msg){
    this.socket.emit('tankMoved', msg);
  }

}
