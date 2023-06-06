const { createHash } = require('crypto');

// Create A String Hash

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let password = 'Password123!';
const hash1 = hash(password);
console.log(hash1);

// Sometime Later

password = 'Password123';
const hash2 = hash(password);
const match = hash1 === hash2;

// Check If Passwords Match
console.log(match ? 'Good Password 🔔' : 'Bad Password 🔕');