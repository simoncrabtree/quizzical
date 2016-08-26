var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var uuid = require('node-uuid')

app.listen(8080);

var teams = {}
var quizmasterId
var nextQuestionNumber = 0
var questions = [
  {type: "multi", question: "How many feet are there in a fathom?", options: [3, 5, 6, 8]},
  {type: "letter", question: "Which football club plays at Craven Cottage"}
]
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
  socket.on('answer', handleAnswer);
  socket.on('action', (action) => {
    switch(action.type) {
      case 'server/login':
        var id = uuid.v4()
        if(action.data.teamName === "Quizmaster") {
          quizmasterId = id
          console.log("Quizmaster logged in", quizmasterId)
          return socket.emit('action', {type:'quizmasterLoggedIn', data: {id: id, nextQuestion: questions[0]}})
        }else{
          teams[id] = {name: action.data.teamName, score:0}
          console.log("Teams", teams)
          return socket.emit('action', {type:'loggedin', data: {id: id}})
        }

      case 'server/askQuestion':
        console.log("Asking Question", action)
        return io.sockets.emit('action', {type: 'question', data: questions[nextQuestionNumber]})
    }
  })
});
