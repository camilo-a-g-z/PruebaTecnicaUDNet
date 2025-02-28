import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'PruebaTecnicaUDNet',
  password: 'hydro',
  port: 5432, // Puerto por defecto de PostgreSQL
});

export const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res.rows;
  } catch (error) {
    console.error('Error ejecutando la consulta', error);
    throw error;
  } finally {
    client.release();
  }
};

export async function testQuery() {
  try {
    const result = await query('SELECT * FROM public.cita ORDER BY idcita ASC');
    console.log(result);
  } catch (error) {
    console.error('Error en la consulta de prueba', error);
  }
}