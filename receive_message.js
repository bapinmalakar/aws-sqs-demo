require('dotenv').config();

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: process.env.REGION});

// Create an SQS service object
const today_date = new Date();
const sqs = new AWS.SQS({ apiVersion: `${today_date.getFullYear()}-${today_date.getMonth()}-${today_date.getDate()}` });

const queueURL = 'https://sqs.us-west-2.amazonaws.com/371083688367/Test_SQS_Queue';

const params = {
    AttributeNames: [
       "SentTimestamp"
    ],
    MaxNumberOfMessages: 10,
    MessageAttributeNames: [
       "All"
    ],
    QueueUrl: queueURL,
    VisibilityTimeout: 20,
    WaitTimeSeconds: 20
   };
   
   //return only one message which on last on the queue
   sqs.receiveMessage(params, function(err, data) {
     if (err) {
       console.log("Receive Error", err);
     } else if (data.Messages) {
       const deleteParams = {
         QueueUrl: queueURL,
         ReceiptHandle: data.Messages[0].ReceiptHandle
       };
       console.log('Message is:: ', data.Messages);
       sqs.deleteMessage(deleteParams, function(err, data) {
         if (err) {
           console.log("Delete Error", err);
         } else {
           console.log("Message Deleted", data);
         }
       });
     }
   });