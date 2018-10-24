require('dotenv').config();

const AWS = require('aws-sdk');
AWS.config.update({region: process.env.REGION});

const today_date = new Date();
//create aws-sqs
const sqs = new AWS.SQS({ apiVersion: `${today_date.getFullYear()}-${today_date.getMonth()}-${today_date.getDate()}` }); // sqs name same as you want

const params = {
    QueueUrl:'https://sqs.us-west-2.amazonaws.com/371083688367/test_queue_2'
};

sqs.deleteQueue(params, (err, data)=>{
    if(err){
        console.log('Error is:: ', err);
    }else{
        console.log('Data is:: ', data);
    }
})