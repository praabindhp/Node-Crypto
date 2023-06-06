const { createCipheriv, createDecipheriv, randomBytes } = require('crypto');

// Cipher

const message = 'This Is A Secret Message';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

// Encryption

const encryptedMessage = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');
console.log('Encrypted Message :', encryptedMessage)

// Decryption

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8');

console.log('Decrypted Message :', decryptedMessage); // This is a secret message