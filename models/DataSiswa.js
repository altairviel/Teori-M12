const mysql = require('mysql2/promise');
class DataSiswa {
            
    static async getConnection() {
        return await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'store_apagi'
            });
        }

    static async getMhs() {
        const db = await this.getConnection();
        const query = "SELECT * FROM mhs";
        
        try {
            const [rows] = await db.query(query);
            return rows; // âœ… ini langsung array of JSON
        } catch (error) {
            console.log("Error:", error);
            return [];
        }
    }
}

module.exports= DataSiswa;