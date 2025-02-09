import express from 'express';
import cors from 'cors';
import midtransClient from 'midtrans-client';
import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

// Fungsi untuk membuat database dan tabel admin jika belum ada
const createDatabaseAndTable = () => {
    db.query('CREATE DATABASE IF NOT EXISTS creativemusichub', (err) => {
        if (err) {
            console.error("❌ Error creating database:", err);
            return;
        }
        console.log("✅ Database created or already exists");

        // Gunakan database yang baru dibuat
        db.changeUser({ database: 'creativemusichub' });

        // Membuat tabel admin jika belum ada
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS admin (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        db.query(createTableQuery, (err) => {
            if (err) {
                console.error("❌ Error creating admin table:", err);
                return;
            }
            console.log("✅ Admin table created or already exists");

            addAdminUser('admin', 'password123', 'admin@example.com');
        });

        // Membuat tabel visitor jika belum ada
        const createTableQuery_visitor = `
            CREATE TABLE IF NOT EXISTS visitors (
                id INT PRIMARY KEY AUTO_INCREMENT,
                count INT NOT NULL
            );
        `;

        db.query(createTableQuery_visitor, (err) => {
            if (err) {
                console.error("❌ Error creating visitors table:", err);
                return;
            }
            console.log("✅ Visitors table created or already exists");
        
            // Cek apakah sudah ada data di tabel visitors
            const checkVisitorQuery = "SELECT COUNT(*) AS count FROM visitors";
            const addVisitorQuery = "INSERT INTO visitors (count) VALUES (0)";
        
            db.query(checkVisitorQuery, (err, result) => {
                if (err) {
                    console.error("❌ Error checking visitors table:", err);
                    return;
                }
        
                const visitorExists = result[0].count > 0;
        
                if (!visitorExists) {
                    db.query(addVisitorQuery, (err) => {
                        if (err) {
                            console.error("❌ Error adding initial visitor count:", err);
                            return;
                        }
                        console.log("✅ Initial visitor count added successfully");
                    });
                } else {
                    console.log("⚠️ Visitors table already has data, skipping insertion");
                }
            });
        });

    });
};

function addAdminUser(username, password, email) {
    const checkAdminQuery = "SELECT COUNT(*) AS count FROM admin WHERE username = ?";
    const addAdminQuery = "INSERT INTO admin (username, password, email) VALUES (?, ?, ?)";

    db.query(checkAdminQuery, [username], (err, result) => {
        if (err) {
            console.error("❌ Error checking admin existence:", err);
            return;
        }

        const adminExists = result[0].count > 0;

        if (!adminExists) {
            db.query(addAdminQuery, [username, password, email], (err) => {
                if (err) {
                    console.error("❌ Error adding admin user:", err);
                    return;
                }
                console.log("✅ Admin user added successfully");
            });
        } else {
            console.log("⚠️ Admin user already exists, skipping insertion");
        }
    });
}

// Jalankan fungsi untuk memastikan database dan tabel ada
createDatabaseAndTable();

app.post('/admin/login', (req, res) => {
    const sql = "SELECT * FROM admin WHERE email = ? AND password = ?"; 
    const values = [req.body.email, req.body.password]; 

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("❌ Error during login:", err);
            return res.json({ status: "error", message: "Login Failed" });
        }
        if (data.length > 0) {
            return res.json({ status: "success", message: "Login successful", data });
        } else {
            return res.json({ status: "error", message: "Invalid email or password" });
        }
    });
});

app.get("/visitors", (req, res) => {
    db.query("SELECT count FROM visitors",(err, result) => {
      if (err) throw err;
      res.json({ count: result[0].count });
    });
  });

// Endpoint untuk menambah jumlah pengunjung
app.post("/visitors", (req, res) => {
    db.query("UPDATE visitors SET count = count + 1", (err) => {
      if (err) throw err;
      res.json({ message: "Visitor count updated" });
    });
  });

// Inisialisasi Midtrans Snap
const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: globalThis.process.env.MIDTRANS_SERVER_KEY,
});

app.post('/api/payments/process-transaction', async (req, res) => {
    try {
        console.log("Incoming Request:", req.body); // ✅ Cek data yang masuk

        const { id, productName, price } = req.body;
        if (!id || !productName || !price) {
            console.error("❌ Missing required fields:", req.body);
            return res.status(400).json({ status: 'error', message: 'Missing required fields' });
        }

        console.log("✅ Processing transaction with:", { id, productName, price });

        const parameter = {
            transaction_details: {
                order_id: `${id}-${Date.now()}`,  // Gunakan order ID unik
                gross_amount: price
            },
            item_details: [{
                id: id,
                price: price,
                quantity: 1,
                name: productName
            }],
            credit_card: {
                secure: true
            }
        };

        console.log("✅ Sending request to Midtrans with:", parameter);

        const token = await snap.createTransactionToken(parameter);
        console.log("✅ Midtrans Token Received:", token);

        res.status(200).json({ status: 'success', token });

    } catch (error) {
        console.error("❌ Server error:", error);
        res.status(500).json({ status: 'error', message: error.message });
    }
});

const PORT = globalThis.process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
