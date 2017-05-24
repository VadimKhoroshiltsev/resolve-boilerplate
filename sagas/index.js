export default function*(socket) {
    socket.on('connect', (err) => {
        if(err)
            return console.log(err);
        console.log('Socket connected');
    })
    yield null;
}
