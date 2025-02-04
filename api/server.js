import express from 'express';
import cors from 'cors';
import midtransClient from 'midtrans-client';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Inisialisasi Midtrans Snap
const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
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

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
