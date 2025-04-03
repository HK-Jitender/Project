import Redis from 'redis'; // Use import instead of require
import  redis  from './config.js'; // Ensure to include .js extension

const url = `redis://${redis.host}:${redis.port}`;
const client = Redis.createClient({ url });

if (redis.usePassword === 'YES') {
    await client.auth(redis.password); // Use await for async operation
}

console.log('Redis Client loaded!!!');

export default client; // Keep the export as is