const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

users = [];

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');
    const user = { email, password: `${salt}:${hashedPassword}` };
    users.push(user);
    console.log(`Signup Successful 🎉 For ${email}`);
}

function login(email, password) {
    const user = users.find(v => v.email === email);
    
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        console.log('Login Successful 🎊');
    } else {
        console.log('Login Failed 🪡');
    }
}

console.log('Signing Up The User Praabindh...');
signup('praabindhp@gmail.com', 'Password123!');
console.log('Logging In The User Praabindh...');
login('praabindhp@gmail.com', 'Password123!');
console.log('\n', users, '\n');
console.log('Signing Up The User Pradeep...');
signup('pradeepkumar@gmail.com', 'Password123!');
console.log('Logging In The User Pradeep...');
login('pradeepkumar@gmail.com', 'Password123!');
console.log('\n', users, '\n');