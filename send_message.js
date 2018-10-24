require('dotenv').config();

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: process.env.REGION});

// Create an SQS service object
const today_date = new Date();
const sqs = new AWS.SQS({ apiVersion: `${today_date.getFullYear()}-${today_date.getMonth()}-${today_date.getDate()}` });

const params = {
 DelaySeconds: 2,
 MessageAttributes: {
  "Title": {
    DataType: "String",
    StringValue: "Test Sending Messge"
   },
  "Author": {
    DataType: "String",
    StringValue: 'Biplab Malakar'
   },
  "WeeksOn": {
    DataType: "Number",
    StringValue: "6"
   }
 },
 MessageBody: "This mesage for testing perpose3",
 QueueUrl: 'https://sqs.us-west-2.amazonaws.com/371083688367/Test_SQS_Queue'
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});