hooq-provider-amazon-sqs
========================

Amazon SQS driver for hooq.io

Installing
==========

```
npm install hooq-provider-amazon-sqs --save
```

Example Usage
=============

```javascript
var awsProvider = require('hooq-provider-amazon-sqs');

// Creating a queue
awsProvider.CreateQueueIfNeeded(connectionModel, queueName, function(){
	console.log("Created queue");
});

// Pushing to a queue
awsProvider.Push(connectionModel, messageObject, function(){
	console.log("Done");
});
```

Methods
=======

## CreateQueueIfNeeded(connectionModel, queueName, callback)
Callback contains the queue url

## Push(connectionModel, message, callback)
Callback contains the... something


Settings Object
===============

```javascript
var connectionModel = {
    AWSId: 'ID',
    AWSSecret: 'SECRET',
    Region: 'us-east-1',
    QueueUrl: '/364248950191/queue1420506635447'
};
```
