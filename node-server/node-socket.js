let state = require('./state');

let socket = {
    io: {},
    connection: function(server) {
        var io = require('socket.io')(server);

        io.on('connection', client => {
            console.log(`Client connected`);

            client.on('disconnect', function() {
                var i = state.miners.indexOf(socket);
                state.miners.splice(i, 1);
                console.log(`Client disconnected. In all: ${state.miners.length} clients now.`);
            });

            client.on('message', message => {
                switch (message.from) {
                    case 'node':
                        console.log('Incoming message from Node');
                        switch (message.action) {
                            case 'GREETINGS':
                                console.log(`Miner ${message.data.hardware} connected!`);
                                state.miners.push(client);
                                console.log(`In all: ${state.miners.length} miners online.`);
                                break;
                            default:
                                return false;
                        }
                        break;
                    case 'web':
                        console.log('Incoming message from Web');
                        break;
                    default:
                        return false;
                }
            })
        });
        this.io = io;
    }
}

module.exports = socket;