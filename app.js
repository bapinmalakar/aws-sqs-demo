// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-west-2'});

// Create an SQS service object
const today_date = new Date();
var sqs = new AWS.SQS({apiVersion: `${today_date.getFullYear()}-${today_date.getMonth()}-${today_date.getDate()}`});

var params = {};

sqs.listQueues(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.QueueUrls);
  }
});