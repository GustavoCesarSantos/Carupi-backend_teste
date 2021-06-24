require('dotenv').config();
const app = require('./config/server/app');

require('./config/database/mongoose');

app.listen(3000, console.log('Server on in port: 3000.'));
