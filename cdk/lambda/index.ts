const { createServer, proxy } = require('aws-serverless-express');
const { default: app } = require('./.next'); // Assuming your Next.js app is exported as 'app' from './app'

const server = createServer(app);

exports.handler = (event:any, context:any) => {
    proxy(server, event, context);
};