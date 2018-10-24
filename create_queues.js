
require('dotenv').config();

const AWS = require('aws-sdk');

AWS.config.update({ region: process.env.REGION });

const today_date = new Date();
//create aws-sqs
const sqs = new AWS.SQS({ apiVersion: `${today_date.getFullYear()}-${today_date.getMonth()}-${today_date.getDate()}` });

const params = {
    QueueName: process.argv[2],
    Attributes: {
        'DelaySeconds': '60',
        'MessageRetentionPeriod': '86400'
    }
};

sqs.createQueue(params, (err, queue_data) => {
    if (err) {
        console.log('Creation error:: ', err);
    } else {
        console.log('Queue create successfully: ', queue_data.QueueUrl);
    }
});
