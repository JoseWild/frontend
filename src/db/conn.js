import mysql from  'mysql2'

const db = mysql.createConnection({
    host: 'mysql.cstbalancas.com.br',
    user: 'cstbalancas',
    password: 'Cstwild533644',
    database: 'cstbalancas',
    port: 3306
});

export default db;