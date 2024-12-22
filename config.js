const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'HANSAMAL-MD=zBknWaBD#T3QMfKde3MhGqvuO-oPBjXzUrBNoy94SYg8-Yja_zbo',
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '11BEXMDNA0t84NLk6CQREa_UdtgPol6zzUXWroQjRGeg6pCp4vsx1L4SkilXcVVoWVO3CKJU3DZRPW1eiv' : process.env.GITHUB_AUTH_TOKEN,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'charukajalanidu-ofc' : process.env.GITHUB_USER_NAME,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94775228949' : process.env.OWNER_NUMBER
};
