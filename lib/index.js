'use strict';

var SQS = require('aws-sqs');

exports.CreateQueueIfNeeded = function (connectionModel, queueName, callback) {
    var sqs = new SQS(connectionModel.AWSId, connectionModel.AWSSecret, {region: connectionModel.Region});

    sqs.createQueue(queueName, function (err, data) {
        callback(data);
    });
};

exports.Push = function (connectionModel, message, callback) {
    var sqs = new SQS(connectionModel.AWSId, connectionModel.AWSSecret, {region: connectionModel.Region});
    sqs.sendMessage(connectionModel.AmazonSQSUrl, JSON.stringify(message), callback);
};