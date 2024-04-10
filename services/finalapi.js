const db = require("../db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(``);

    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function create(finalapi) {
    const result = await db.query(``);

    let message = "Error in models";
    if (result.affectedRows) {
        message = "record created";
    }
    return {
        message
    };
}

module.exports = {
    getMultiple
}