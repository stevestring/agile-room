import openSocket from 'socket.io-client';
var settings = require( './settings');

const  socket = openSocket(settings.socketurl);

//Subscribe to socketIO room updates 
//TODO: Look into namespaces and rooms instead of prefix
function subscribeToRoomChanges(room, cb) {
    socket.on("room-"+room, callBack => cb());
    socket.emit('subscribeToRoomChanges', room);
  }
export   {subscribeToRoomChanges};

//Subscribe to socketIO player updates 
//TODO: Look into namespaces and rooms instead of prefix
function subscribeToPlayerInputChanges(room, cb) {
    try{
    socket.on("player-input-"+room, callBack => cb());
    socket.emit('subscribeToPlayerInputChanges', room);
    }
    catch (err)
    {
        alert(err);
    }
    
  }
  export   {subscribeToPlayerInputChanges};
//Subscribe to socketIO player updates 
//TODO: Look into namespaces and rooms instead of prefix
function subscribeToRoomInputChanges(room, cb) {
    try{
    socket.on("room-input-"+room, callBack => cb());
    socket.emit('subscribeToRoomInputChanges', room);
    }
    catch (err)
    {
        alert(err);
    }
    
  }
  export   {subscribeToRoomInputChanges};