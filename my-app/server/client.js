const { Client } = require('pg');
require('dotenv').config();

module.exports.getClient = async () => {
    const client = new Client({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
        ssl: false,
    });

    try {
        await client.connect();
        // const res = await client.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
        // console.log(res.rows[0].connected);
    } catch (error) {
        console.error('Error during database connection or query:', error);
    } finally {
        return client;
    }
};
