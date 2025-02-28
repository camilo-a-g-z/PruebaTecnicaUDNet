import pool from 'pg';

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'PruebaTecnicaUDNet',
    password : 'hydro',
    port : 5432
});

export default pool;

export function bodyParse(req, res, next) {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        req.body = JSON.parse(data);
        next();
    });
}