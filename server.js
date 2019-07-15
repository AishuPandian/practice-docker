const express = require('express');
const server = express();
const PORT = 3002;
const Pool = require('pg').Pool;
//var pg = new pg.Pool(config);
const pool = new Pool({
    user: 'postgres',
    database: 'Sample',
    password: 'password',
    port: 5432
});

//const pool = new pg.Pool(pool)
//pg.connect('postgres://postgres:password@localhost:5432/practicedocker');
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get('/', (req, res) => res.status(200).send('hello'));