const amqp = require('amqp');
const { v4: uuidv4 } =  require('uuid');

/* amqp://admin:qwerty007@ip-172-31-78-3:5672 */

const connection =
    amqp.createConnection({url: "amqp://admin:qwerty007@ip-172-31-78-3:5672"});

// add this for better debuging
connection.on('error', function(e) {
    console.log("Error from amqp: ", e);
});

// Wait for connection to become established.
connection.on('ready', function () {
    console.log("ready");

    if (process.env.MODE === 'consumer') {
        connection.queue('test',  { durable: true, autoDelete: false }, function (q) {
            // Catch all messages
            q.bind('#');

            // Receive messages
            q.subscribe(function (message, headers, deliveryInfo, messageObject) {
                console.log('Got a message with routing key ' + deliveryInfo.routingKey);
                // Print messages to stdout
                console.log(message);
            });
        });
    } else if (process.env.MODE === 'producer') {
        startProducing()
    }

    function startProducing() {
        setInterval(() => {
            connection.publish('test', {test: uuidv4()})
        }, 0)
    }

});





// setInterval(() => {
//
// }, 1000)
