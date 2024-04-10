const mysql = require('mysql2/promise');

const config = require("../config");
const {query} = require("express");

async function query(sql, query) {
    const connection = await mysql.createConnection(config);
    const [rows, fields] = await connection.execute(sql, query);
    return rows;
}

module.exports= {
    query
}