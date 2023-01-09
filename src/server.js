const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');
const Sequelize = require("sequelize");

const app = express();

// Using the body parser middleware to parse request bodies
app.use(bodyParser.json());

// Enabling CORS for all routes
app.use(cors());

// Connection to the MySQL data

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DataProducts',
});

// Initialize the Sequelize instance
const sequelize = new Sequelize('DataProducts', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define the Product model using Sequelize
const Product = sequelize.define('product', {
  id:{ 
    type: Sequelize.STRING, 
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
  },
  brand: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.FLOAT,
  },
  image: {
    type: Sequelize.STRING,
  }, 
},{
  timestamps: false
});

app.get('/products', async (req, res) => {
  try {
    // Get the min and max price from the query parameters
    const { minPrice, maxPrice } = req.query;
    console.log(minPrice)
    console.log(maxPrice)
    // Filter the products based on the min and max price
    let products = await Product.findAll({
      where: {
        price: {
          [Sequelize.Op.between]: [minPrice, maxPrice],
        },
      },
    });

    // If there are no matching products, retrieve all products from the database
    if (products.length === 0) {
      // Getting a connection from the pool
      const connection = await pool.getConnection();

      // Executing the query using the mysql2 module's execute() method
      const [rows] = await connection.execute('SELECT * FROM Products');

      // Releasing the connection back to the pool
      connection.release();

      // Set the products to the rows retrieved from the database
      products = rows;
    }

    // Send the products as the response
    res.send(products);
  } catch (error) {
    // Logging the error and send a 500 Internal Server Error response
    console.error(error);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/* 
This code creates a server using the Express.js framework. 
The server listens for HTTP GET requests at the /products route,
and when it receives a request, 
it retrieves all rows from the Products table in a MySQL database. 
The rows are then sent as the response to the client. 
The server also uses the body-parser and cors middlewares to parse 
the request bodies and enable cross-origin resource sharing (CORS) 
respectively. Finally, the server listens for connections on port 5500. 
If the PORT environment variable is set, 
the server will listen on that port instead.
*/