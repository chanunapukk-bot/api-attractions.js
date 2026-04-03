export default async function handler(req, res) {
  const mysql = require('mysql2/promise');

  try {
    const connection = await mysql.createConnection({
      host: 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com',
      user: '42Arh74tapgxe8h.root',
      password: '1wBACsBo5saP2a7X',
      database: 'test',
      port: 4000,
      ssl: {
        rejectUnauthorized: true
      }
    });

    // 🔥 test query ง่ายๆ ก่อน
    const [rows] = await connection.execute('SELECT 1');

    res.status(200).json({
      message: "Connected OK",
      data: rows
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
