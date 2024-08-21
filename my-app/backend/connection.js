const { Client } = require('pg');
require('dotenv').config();
/*require, commonJS module way of importing, in this case the 'dotenv' pkg
the dotenv pkg has config() that will parse the variables in the config.env file and load them into the process.env fields
the process object is a global object that allows you to interact with the js runtime enviornment
*/

//THIS FILE IS FOR TESTING CONNECTION

(async () =>{
    const client = new Client({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
        ssl: false,
    });

    console.log({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password, // Check this value
        database: process.env.database,
      });

    await client.connect();
    const res = await client.query('SELECT $1::text as connected', ['Connection to postgres successful!'])
    console.log(res.rows[0].connected);
    await client.end();
})();