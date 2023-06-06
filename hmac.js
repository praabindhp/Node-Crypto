const { createHmac } = require('crypto');

const key = 'Super-Secret-Key';
const message = 'This is a secret message';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log('First - Hashed Password :', hmac);

const key2 = 'Other-Password';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log('Second - Hashed Password :', hmac2);