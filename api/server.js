import express from "express";
import cors from "cors";
import midtransClient from "midtrans-client";
import dotenv from "dotenv";
import mysql from "mysql2";
import multer, { diskStorage } from "multer";
import path from "path";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

// Konfigurasi multer untuk upload video
const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads"); // Folder penyimpanan video
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext); // Nama file unik
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("video/")) {
      cb(null, true); // Hanya terima video
    } else {
      cb(new Error("File harus berupa video!")); // Tolak tipe file lain
    }
  },
});

// Fungsi untuk membuat database dan tabel admin jika belum ada
const createDatabaseAndTable = () => {
  db.query("CREATE DATABASE IF NOT EXISTS creativemusichub", (err) => {
    if (err) {
      console.error("❌ Error creating database:", err);
      return;
    }
    console.log("✅ Database created or already exists");

    // Gunakan database yang baru dibuat
    db.changeUser({ database: "creativemusichub" });

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

      addAdminUser("admin", "password123", "admin@example.com");
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

    // Membuat tabel FAQ jika belum ada
    const createTableQuery_faq = `
            CREATE TABLE IF NOT EXISTS faq (
                id INT AUTO_INCREMENT PRIMARY KEY,
                question TEXT NOT NULL,
                answer TEXT NOT NULL,
                category VARCHAR(255),
                status ENUM('Published', 'Draft', 'Archived') DEFAULT 'Draft',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
        `;

    db.query(createTableQuery_faq, (err) => {
      if (err) {
        console.error("❌ Error creating FAQ table:", err);
        return;
      }
      console.log("✅ FAQ table created or already exists");
    });

    // Membuat tabel header jika belum ada
    const createHeaderTableQuery = `
    CREATE TABLE IF NOT EXISTS header (
        id INT AUTO_INCREMENT PRIMARY KEY,
        position VARCHAR(255) NOT NULL,
        content_en VARCHAR(255) NOT NULL,
        content_id VARCHAR(255) NOT NULL,
        path VARCHAR(255) NOT NULL,
        parent_id INT DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`;

    db.query(createHeaderTableQuery, (err) => {
      if (err) {
        console.error("❌ Error creating header table:", err);
      } else {
        console.log("✅ Header table created or already exists");
      }
    });

    const createPortfoliosTableQuery = `
        CREATE TABLE IF NOT EXISTS portfolios (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            genre VARCHAR(255),
            description TEXT,
            video VARCHAR(255)
        );
      `;

    db.query(createPortfoliosTableQuery, (err) => {
      if (err) {
        console.error("❌ Error creating portfolio table:", err);
      } else {
        console.log("✅ Portfolio table created or already exists");
      }
    });

    // Membuat tabel biodata jika belum ada
    const createBiodataTableQuery = `
            CREATE TABLE IF NOT EXISTS biodata (
            id INT AUTO_INCREMENT PRIMARY KEY,
            item_id INT,
            email VARCHAR(255),
            name VARCHAR(255),
            whatsapp VARCHAR(255),
            price INT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (item_id) REFERENCES items(id)
            );
        `;

    db.query(createBiodataTableQuery, (err) => {
      if (err) {
        console.error("❌ Error creating biodata table:", err);
        return;
      }
      console.log("✅ Biodata table created or already exists");
    });

    // Membuat tabel items jika belum ada
    const createItemsTableQuery = `
    CREATE TABLE IF NOT EXISTS items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) UNIQUE
    );
`;

    db.query(createItemsTableQuery, (err) => {
      if (err) {
        console.error("❌ Error creating items table:", err);
        return;
      }
      console.log("✅ Items table created or already exists");

      // Insert default items (if they don't exist)
      const checkItemsQuery = "SELECT COUNT(*) AS count FROM items";
      db.query(checkItemsQuery, (err, result) => {
        if (err) {
          console.error("❌ Error checking items existence:", err);
          return;
        }

        if (result[0].count === 0) {
          // Check if no items exist
          const insertItemsQuery = `
        INSERT INTO items (name) VALUES
        ('lirik'),  -- Correct item names
        ('instrumen'),
        ('efek-suara');
      `;

          db.query(insertItemsQuery, (err) => {
            if (err) {
              console.error("❌ Error inserting default items:", err);
              return;
            }
            console.log("✅ Default items inserted successfully");
          });
        } else {
          console.log(
            "⚠️ Items data already exists, skipping default insertion"
          );
        }
      });
    });
  });
};

function addAdminUser(username, password, email) {
  const checkAdminQuery =
    "SELECT COUNT(*) AS count FROM admin WHERE username = ?";
  const addAdminQuery =
    "INSERT INTO admin (username, password, email) VALUES (?, ?, ?)";

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

app.post("/admin/login", (req, res) => {
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
      return res.json({
        status: "error",
        message: "Invalid email or password",
      });
    }
  });
});

app.get("/visitors", (req, res) => {
  db.query("SELECT count FROM visitors", (err, result) => {
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

app.get("/headers", async (req, res) => {
  try {
    const [results] = await db
      .promise()
      .query("SELECT * FROM header ORDER BY position, parent_id");

    console.log("✅ Headers Fetched:", results);

    res.status(200).json(results); // Mengembalikan daftar datar
  } catch (err) {
    console.error("❌ Error fetching headers:", err);
    res.status(500).json({ error: "Failed to fetch headers" });
  }
});

// Endpoint untuk menambahkan header baru
app.post("/headers", (req, res) => {
  const { position, content_en, content_id, path, parent_id } = req.body;
  const sql =
    "INSERT INTO header (position, content_en, content_id, path, parent_id) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sql,
    [position, content_en, content_id, path, parent_id],
    (err, result) => {
      if (err) {
        console.error("❌ Error creating header:", err);
        return res.status(500).json({ error: "Failed to create header" });
      }
      res
        .status(201)
        .json({ message: "Header created successfully", id: result.insertId });
    }
  );
});

// Endpoint untuk mengupdate header
app.put("/headers/:id", (req, res) => {
  const { position, content_en, content_id, path, parent_id } = req.body;
  const { id } = req.params;
  const sql =
    "UPDATE header SET position = ?, content_en = ?, content_id = ?, path = ?, parent_id = ? WHERE id = ?";
  db.query(
    sql,
    [position, content_en, content_id, path, parent_id, id],
    (err) => {
      if (err) {
        console.error("❌ Error updating header:", err);
        return res.status(500).json({ error: "Failed to update header" });
      }
      res.status(200).json({ message: "Header updated successfully" });
    }
  );
});

// Endpoint untuk menghapus header
app.delete("/headers/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM header WHERE id = ?";
  db.query(sql, [id], (err) => {
    if (err) {
      console.error("❌ Error deleting header:", err);
      return res.status(500).json({ error: "Failed to delete header" });
    }
    res.status(200).json({ message: "Header deleted successfully" });
  });
});

// Endpoint untuk mengambil data portfolio
app.get("/portfolios", (req, res) => {
  const sql = "SELECT * FROM portfolios";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("❌ Error fetching portfolios:", err);
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(result);
  });
});

// Endpoint untuk menambahkan data portfolio baru
app.post("/portfolios", upload.single("video"), (req, res) => {
  const { name, genre, description } = req.body;
  const video = req.file ? req.file.filename : null; // Nama file video dari multer

  if (!name || !genre || !description) {
    return res.status(400).json({ error: "Data portfolio tidak lengkap!" });
  }

  const sql =
    "INSERT INTO portfolios (name, genre, description, video) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, genre, description, video], (err, result) => {
    if (err) {
      console.error("❌ Error creating portfolio:", err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      // Mengembalikan data portfolio yang baru dibuat
      id: result.insertId,
      name,
      genre,
      description,
      video,
    });
  });
});

// Endpoint untuk mengupdate data portfolio
app.put("/portfolios/:id", upload.single("video"), (req, res) => {
  const { name, genre, description } = req.body;
  const video = req.file ? req.file.filename : null;
  const { id } = req.params;

  if (!name || !genre || !description) {
    return res.status(400).json({ error: "Data portfolio tidak lengkap!" });
  }

  let sql = "UPDATE portfolios SET name = ?, genre = ?, description = ?";
  const values = [name, genre, description];

  if (video) {
    sql += ", video = ?";
    values.push(video);
  }

  sql += " WHERE id = ?";
  values.push(id);

  db.query(sql, values, (err) => {
    if (err) {
      console.error("❌ Error updating portfolio:", err);
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Portfolio updated successfully" });
  });
});

// Endpoint untuk menghapus data portfolio
app.delete("/portfolios/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM portfolios WHERE id = ?";
  db.query(sql, [id], (err) => {
    if (err) {
      console.error("❌ Error deleting portfolio:", err);
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Portfolio deleted successfully" });
  });
});

// Endpoint untuk mengambil data items
app.get("/items", (req, res) => {
  const sql = "SELECT * FROM items";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("❌ Error fetching items:", err);
      res.status(500).json({ error: "Failed to fetch items" });
      return;
    }
    res.status(200).json(result);
  });
});

// Endpoint untuk menyimpan biodata
app.post("/biodata", (req, res) => {
  console.log("Incoming Biodata:", req.body);
  const { item_id, email, name, whatsapp, price } = req.body; // Terima item_id

  if (!item_id || !email || !name || !whatsapp || !price) {
    return res.status(400).json({ message: "Data tidak lengkap." });
  }

  const sql =
    "INSERT INTO biodata (item_id, email, name, whatsapp, price) VALUES (?, ?, ?, ?, ?)"; // Gunakan item_id di query
  db.query(sql, [item_id, email, name, whatsapp, price], (err, result) => {
    // Gunakan item_id
    if (err) {
      console.error("❌ Error saving biodata:", err);
      res
        .status(500)
        .json({ message: "Gagal menyimpan data biodata.", error: err.message });
      return;
    }
    console.log("✅ Biodata inserted:", result.insertId);
    res.status(200).json({ message: "Data biodata berhasil disimpan." });
  });
});

app.delete("/biodata/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM biodata WHERE id = ?";

  db.query(sql, [id], (err) => {
    if (err) {
      console.error("❌ Error deleting biodata:", err);
      return res.status(500).json({ error: "Gagal menghapus data biodata." });
    }
    res.status(200).json({ message: "Data biodata berhasil dihapus." });
  });
});

app.get("/biodata/count", (req, res) => {
  const sql = "SELECT COUNT(*) AS count FROM biodata";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("❌ Error fetching biodata count:", err);
      return res
        .status(500)
        .json({ error: "Gagal mengambil jumlah data biodata" });
    }
    res.status(200).json({ count: result[0].count });
  });
});

// Endpoint untuk mengambil data biodata dengan nama item (bergabung dengan tabel items)
app.get("/biodata", (req, res) => {
  const itemId = req.query.item_id; // Ambil item_id dari query parameter
  const itemName = req.query.item_name; // Ambil item_name dari query parameter

  let sql = `
      SELECT 
          b.id,
          b.item_id,
          i.name AS item_name,
          b.email,
          b.name,
          b.whatsapp,
          b.price,
          b.created_at
      FROM biodata b
      INNER JOIN items i ON b.item_id = i.id
  `;

  if (itemName) {
    sql += ` WHERE i.name = ?`;
  }

  if (itemId) {
    sql += ` WHERE i.name = ?`;
  }

  db.query(sql, [itemId], (err, result) => {
    // Masukkan itemId ke query
    if (err) {
      console.error("❌ Error fetching biodata:", err);
      return res.status(500).json({ error: "Failed to fetch biodata" });
    }
    res.status(200).json(result);
  });
});

app.get("/orders/:productId", (req, res) => {
  const productId = req.params.productId;
  const sql = "SELECT COUNT(*) AS count FROM biodata WHERE item_id = ?"; // Ganti product_id dengan nama kolom yang sesuai di tabel biodata Anda.

  db.query(sql, [productId], (err, result) => {
    if (err) {
      console.error("❌ Error fetching order count:", err);
      return res.status(500).json({ error: "Failed to fetch order count" });
    }
    res.json({ orderCount: result[0].count });
  });
});

// Endpoint untuk mengambil semua FAQ
app.get("/faq", (req, res) => {
  const sql = "SELECT * FROM faq";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("❌ Error fetching FAQs:", err);
      return res.status(500).json({ error: "Failed to fetch FAQs" });
    }
    res.status(200).json(result);
  });
});

// Endpoint untuk menambahkan FAQ baru
app.post("/faq", (req, res) => {
  const { question, answer, category } = req.body; // Ambil data dari request body

  const sql = "INSERT INTO faq (question, answer, category) VALUES (?, ?, ?)";
  db.query(sql, [question, answer, category], (err, result) => {
    if (err) {
      console.error("❌ Error creating FAQ:", err);
      return res.status(500).json({ error: "Failed to create FAQ" });
    }
    res
      .status(201)
      .json({ message: "FAQ created successfully", id: result.insertId }); // Beri status 201 Created dan kirim ID baru
  });
});

// Endpoint untuk mengupdate FAQ
app.put("/faq/:id", (req, res) => {
  const { question, answer, category } = req.body;
  const { id } = req.params;

  const sql =
    "UPDATE faq SET question = ?, answer = ?, category = ? WHERE id = ?";
  db.query(sql, [question, answer, category, id], (err) => {
    if (err) {
      console.error("❌ Error updating FAQ:", err);
      return res.status(500).json({ error: "Failed to update FAQ" });
    }
    res.status(200).json({ message: "FAQ updated successfully" });
  });
});

// Endpoint untuk menghapus FAQ
app.delete("/faq/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM faq WHERE id = ?";
  db.query(sql, [id], (err) => {
    if (err) {
      console.error("❌ Error deleting FAQ:", err);
      return res.status(500).json({ error: "Failed to delete FAQ" });
    }
    res.status(200).json({ message: "FAQ deleted successfully" });
  });
});

// Inisialisasi Midtrans Snap
const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: globalThis.process.env.MIDTRANS_SERVER_KEY,
});

app.post("/api/payments/process-transaction", async (req, res) => {
  try {
    console.log("Incoming Request:", req.body); // ✅ Cek data yang masuk

    const { id, productName, price } = req.body;
    if (!id || !productName || !price) {
      console.error("❌ Missing required fields:", req.body);
      return res
        .status(400)
        .json({ status: "error", message: "Missing required fields" });
    }

    console.log("✅ Processing transaction with:", { id, productName, price });

    const parameter = {
      transaction_details: {
        order_id: `${id}-${Date.now()}`, // Gunakan order ID unik
        gross_amount: price,
      },
      item_details: [
        {
          id: id,
          price: price,
          quantity: 1,
          name: productName,
        },
      ],
      credit_card: {
        secure: true,
      },
    };

    console.log("✅ Sending request to Midtrans with:", parameter);

    const token = await snap.createTransactionToken(parameter);
    console.log("✅ Midtrans Token Received:", token);

    res.status(200).json({ status: "success", token });
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

const PORT = globalThis.process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
