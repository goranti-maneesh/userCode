const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "furation_db",
  post: 3001,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect(function (err) {
  if (err) throw err;
  const insrtData =
    "INSERT INTO contact_db (name,email,contact) VALUES ('sr1','srinuk@gmail.com','2222222')";
  db.query(insrtData, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

app.post("/pay", async (req, res) => {
  const { amount, paymentMethodId, orderDetails } = req.body;

  async function createCustomer(email, paymentSourceToken) {
    try {
      const customer = await stripe.customers.create({
        payment_method: paymentMethodId,
        email: "customer@example.com",
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });
      return customer.id;
    } catch (error) {
      console.error("Error creating customer:", error);
      throw error;
    }
  }

  const email = "user@gmail.com";
  const paymentSourceToken = paymentMethodId;

  try {
    const customerId = await createCustomer(email, paymentSourceToken);

    await stripe.paymentMethods.attach(paymentSourceToken, {
      customer: customerId,
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      customer: customerId,
      payment_method: paymentMethodId,
      off_session: true,
      confirm: true,
      description: "Software development services",
      shipping: {
        name: "Jenny Rosen",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
    });

    res.json({ paymentIntent });

    if (paymentIntent.status === "succeeded") {
      const orderQuery = "INSERT INTO orders SET ?";
      db.query(orderQuery, orderDetails, (err, result) => {
        if (err) throw err;
        res.json({
          message: "Payment successful and order stored",
          orderDetails,
        });
      });
    }
  } catch (err) {
    console.log("err");
    res.json({ message: "Payment failed", err });
  }
});

app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM products WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { name, price, imeage } = req.body;
  const sqlInsert = "INSERT INTO products (name,price,imeage) VALUES (?,?,?)";
  db.query(sqlInsert, [name, price, imeage], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM products WHERE id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, imeage } = req.body;
  const sqlupdateData =
    "UPDATE products SET name =? ,price=?,imeage=? WHERE id =?";
  db.query(sqlupdateData, [name, price, imeage, id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
