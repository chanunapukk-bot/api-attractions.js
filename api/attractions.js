export default async function handler(req, res) {
  const mysql = require('mysql2/promise');

  const connection = await mysql.createConnection({
    host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
    user: 'ใส่ USER ของคุณตรงนี้',
    password: 'ใส่ PASSWORD ของคุณตรงนี้',
    database: 'test',
    port: 4000,
    ssl: {
      rejectUnauthorized: true
    }
  });

  const [rows] = await connection.execute('SELECT * FROM attractions');

  res.status(200).json(rows);
}
