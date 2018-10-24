require('dotenv').config();

//enable long polling to an existing queue
// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: process.env.REGION});

// Create the SQS service object
// Create an SQS service object
const today_date = new Date();
const sqs = new AWS.SQS({ apiVersion: `${today_date.getFullYear()}-${today_date.getMonth()}-${today_date.getDate()}` });

const params = {
 Attributes: {
  "ReceiveMessageWaitTimeSeconds": "50",
 },
 QueueUrl: 'https://sqs.us-west-2.amazonaws.com/371083688367/Test_SQS_Queue'
};

sqs.setQueueAttributes(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});