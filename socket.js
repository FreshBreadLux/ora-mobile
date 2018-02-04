const socketProcessor = socket => {
  console.log('Hello from the socket processor')

  socket.on('connection', socket => {
    console.log(`connected socket: ${socket.id}`)
  })

  socket.on('private-message', message => {
    console.log('private message: ', message)
  })

}

export default socketProcessor
