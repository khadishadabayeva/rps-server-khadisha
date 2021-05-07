const express = require('express')
const app = express()
const cors = require('cors')
const SocketIO = require('socket.io')
const corsOptions = {
    origin: 'http://localhost:8080'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// const wsServer = new ws.Server({ noServer: true });

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Rock-Paper-Scissors API'
    })
})

const http = require('http').createServer(app)

const io = SocketIO(http, {
    cors: {}
})

io.on('connection', (socket) => {
    console.log('Got a connection')

    socket.on('message', (arg) => {
        console.log('got a connection', arg)
        socket.on('message', (arg) => {
            console.log('Got a message:', arg)
            setTimeout(() => {
                socket.emit('serverMessage', 'Hello from server')
            }, 2000)
        })
    })
})

const PORT = process.env.PORT || 8081


const server = http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
})

// server.on('upgrade', (request, socket, head) => {
//     wsServer.handleUpgrade(request, socket, head, socket => {
//         wsServer.emit('connection', socket, request)
//     })
// })
