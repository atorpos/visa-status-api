const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(`Select * from visa_container order by id desc LIMIT ${offset}, ${config.listPerPage}`);

    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function create(finalapi) {
    finalapi.approvetime = undefined;
    finalapi.casestatus = undefined;
    finalapi.caseid = undefined;
    const result = await db.query(`INSERT INTO eb5table (case_id, case_status, update_date, approve_date) VALUES ('${finalapi.caseid}', '${finalapi.casestatus}','${finalapi.time}','${finalapi.approvetime}')`);

    let message = "Error in models";
    if (result.affectedRows) {
        message = "record created";
    }
    return {
        message
    };
}

async function update(id, finalapi) {
    const result = await db.query(`UPDATE eb5update SET case_status="${finalapi.casestatus}", create_time=${finalapi.time} WHERE id=${id}`);
    let message = "Error in models";
    if (result.affectedRows) {
        message = "record updated";
    }
    return {
        message
    };
}

async function remove(id) {
    const result = await db.query(`DELETE FROM eb5update WHERE id = ${id}`);
    let message = "Error in models";
    if (result.affectedRows) {
        message = "record removed";
    }
    return {
        message
    };
}

module.exports = {
    getMultiple,
    create,
    update,
    remove
}