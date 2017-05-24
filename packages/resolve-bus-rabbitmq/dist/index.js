'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = function (options) {
    var handler = function handler() {};
    var config = (0, _assign2.default)(defaultOptions, options);
    var initPromise = init(config, function (event) {
        return handler(event);
    });

    return {
        publish: function publish(event) {
            return initPromise.then(function (channel) {
                channel.publish(config.exchange, config.queueName, new Buffer((0, _stringify2.default)(event)));
            });
        },
        setTrigger: function setTrigger(callback) {
            return initPromise.then(function () {
                return handler = callback;
            });
        }
    };
};

var _amqplib = require('amqplib');

var _amqplib2 = _interopRequireDefault(_amqplib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
    exchange: 'exchange',
    queueName: '',
    channelName: '',
    exchangeType: 'fanout'
};

function init(options, handler) {
    return _amqplib2.default.connect(options.url).then(function (connection) {
        return connection.createChannel();
    }).then(function (channel) {
        return channel.assertExchange(options.exchange, options.exchangeType, {
            durable: false
        }).then(function () {
            return channel;
        });
    }).then(function (channel) {
        return channel.assertQueue(options.queueName).then(function (queue) {
            return channel.bindQueue(queue.queue, options.exchange);
        }).then(function () {
            return channel.consume(options.queueName, function (msg) {
                if (msg) {
                    var content = msg.content.toString();
                    var message = JSON.parse(content);
                    handler(message);
                }
            }, { noAck: true });
        }).then(function () {
            return channel;
        });
    });
}