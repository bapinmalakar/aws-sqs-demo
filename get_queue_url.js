
require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({ region: process.env.REGION });

const today_date = new Date();
//create aws-sqs
const sqs = new AWS.SQS({ apiVersion: `${today_date.getFullYear()}-${today_date.getMonth()}-${today_date.getDate()}` }); // sqs name same as you want

const params = { QueueName: 'Test_SQS_Queue' }; // Queue name is required

sqs.getQueueUrl(params, (err, queue_urls) => {
    if (err) {
        console.log(`Error is: ${err}`);
    } else {
        console.log(`Url list: ${queue_urls.QueueUrl}`);
    }
});