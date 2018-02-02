const socketProcessor = io => {
  console.log('Hello from the socket processor')
  io.on('connection', socket => {
    console.log(`connected socket: ${socket.id}`)
  })
}

export default socketProcessor
