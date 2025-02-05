import axios from 'axios';

const checkout = async (product) => {
  try {
    if (!product) {
      throw new Error("Product is undefined");
    }

    const data = {
      id: product.id,
      productName: product.name, 
      price: product.price,
    };

    console.log("✅ Checkout Data:", data);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      "http://localhost:1000/api/payments/process-transaction",
      data,
      config
    );

    console.log("✅ Response:", response.data);
    console.log("Checkout Data:", data);
    console.log("Response:", response.data);

    const token = response.data.token;

    // Pastikan Midtrans Snap sudah tersedia
    if (window.snap) {
      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log("Payment Success:", result);
          alert("Payment Successful!");
        },
        onPending: function (result) {
          console.log("Payment Pending:", result);
          alert("Payment Pending. Please complete the transaction.");
        },
        onError: function (result) {
          console.log("Payment Failed:", result);
          alert("Payment Failed. Please try again.");
        },
        onClose: function () {
          console.log("Payment Popup Closed");
          alert("Payment popup closed without completing the transaction.");
        },
      });
    } else {
      console.error("Midtrans Snap is not loaded");
      alert("Midtrans Snap is not loaded. Please check your script.");
    }
  } catch (error) {
    console.error("Checkout error:", error);
    alert("Checkout failed. Please try again.");
  }
};

export { checkout };
