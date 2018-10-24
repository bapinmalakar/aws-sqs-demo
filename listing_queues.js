// Load the AWS SDK for Node.js
require('dotenv').config();

const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: process.env.REGION});

// Create an SQS service object
const today_date = new Date();
const sqs = new AWS.SQS({apiVersion: `${today_date.getFullYear()}-${today_date.getMonth()}-${today_date.getDate()}`});

const params = {};

sqs.listQueues(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.QueueUrls);
  }
});