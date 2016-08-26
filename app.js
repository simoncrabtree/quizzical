var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);

function servePage(req, res, page) {
  fs.readFile(__dirname + '/client-dist/' + page,
  function (err, data) {
    if (err) {
      res.writeHead(404);
      return res.end('Page Not Found');
    }

    res.writeHead(200);
    res.end(data);
  });
}

function handler (req, res) {
  console.log(req.url)
  if(req.url === '/client.js')
    return servePage(req, res, 'client.js')

  servePage(req, res, 'index.html')
}

var handleAnswer = function (data) {
  console.log(data);
}

io.on('connection', function (socket) {
  socket.emit('question', { type: 'multiplechoice' });
  socket.on('answer', handleAnswer);
  socket.on('action', (action) => {
    if(action.type === 'server/login') {
      console.log(action.data)
      socket.emit('action', {type:'loggedin', data:'NEW-TOKEN'})
    }
  })
});