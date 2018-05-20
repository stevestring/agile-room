import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
// function subscribeToTimer(cb) {
//   socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }
// export { subscribeToTimer };

function subscribeToRoom(cb) {
    socket.on('room', room => cb(null, room));
    socket.emit('subscribeToRoom', 1000);//TODO; 1000 not necessary
  }
export default  subscribeToRoom ;