'use strict';

var queueService = require('../lib/index');
var region = 'us-east-1';

exports.Test_That_Queue_Can_Be_Created = function (test) {
    var connectionModel = {
        AWSId: 'ID',
        AWSSecret: 'SECRET',
        Region: region
    };

    queueService.CreateQueueIfNeeded(connectionModel, 'queue' + new Date().getTime(), function () {
        test.done();
    });
};

exports.Test_That_Data_Can_Be_Pushed_Into_Queue = function (test) {
    var queueName = 'queue' + new Date().getTime();

    var connectionModel = {
        AWSId: 'ID',
        AWSSecret: 'SECRET',
        Region: region
    };

    queueService.CreateQueueIfNeeded(connectionModel, queueName, function (data) {
        connectionModel.QueueUrl = data[1];
        console.log(connectionModel);

        queueService.Push(connectionModel, {name: 'Daniel'}, function (data) {
            console.log(arguments);
            test.done();
        });
    });
};