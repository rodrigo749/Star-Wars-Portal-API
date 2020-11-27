const { poolPromise } = require('../../config/database');

exports.getAll = async() =>{

    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`SELECT * FROM characters`)

                return rs.recordset;
}

exports.create = async(dados) => {
    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`INSERT INTO characters (name_char, age)
                        VALUES ('${dados.name_char}', '${dados.age}')`);
                        
    return rs.rowsAffected;                                
}


exports.delete = async(id) => {
    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`DELETE FROM characters
                         
                         WHERE id = ${id} `);
    return rs.rowsAffected;                                
}

exports.update = async(id, dados) => {
    const pool = await poolPromise;
    const rs = await pool 
                .request()
                .query(`UPDATE characters  SET 
                        name_char = '${dados.name_char}',
                        age = '${dados.age}'
                        WHERE id = ${id} `);
    return rs.rowsAffected;                                
}

exports.find = async(id) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT *
                    FROM characters 
                    WHERE id = ${id} `);
    
            return rs.recordset;
}