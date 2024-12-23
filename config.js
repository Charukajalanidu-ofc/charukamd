const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'HANSAMAL-MD=zBknWaBD#T3QMfKde3MhGqvuO-oPBjXzUrBNoy94SYg8-Yja_zbo',
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? 'JrdWz7X7JpkZs2YDhZ5ZVzyki6x5ZJ1Jkx4A' : process.env.GITHUB_AUTH_TOKEN,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'charukajalanidu-ofc' : process.env.GITHUB_USER_NAME,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94775228949' : process.env.OWNER_NUMBER
};
