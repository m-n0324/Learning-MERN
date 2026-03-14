// External Module
const express = require('express');
const fs = require('fs');

const {URLSearchParams} = require('url');

const app = express();

app.use((req, res, next) => {
  console.log('Request Received', req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Myntra</title>
      </head>
      <body>
        <h1>Welcome to First Server</h1>
        <form action="/buy-product" method="POST">
          <input type="text" placeholder="Enter the product that you want" name="product">
          <br />
          <input type="text" placeholder="Enter your budget" name="budget">
          <input type="submit">
        </form>
      </body>
      </html>
    `);
});

app.post("/buy-product", (req, res, next) => {
  console.log("Form data received.");
  const buffer = [];
  req.on('data', (chunk) => {
    console.log(chunk);
    buffer.push(chunk);
  });
  req.on('end', () => {
    const body = Buffer.concat(buffer).toString();
    const urlParams = new URLSearchParams(body);
    const bodyJson = {};
    //[["product", "Jeans"], ["price", "1299"]]
    for (const [key, value] of urlParams.entries()) {
      bodyJson[key] = value;
    }
    console.log(JSON.stringify(bodyJson));
    fs.writeFile('buy.txt', JSON.stringify(bodyJson), (err) => {
      res.statusCode = 302;
      res.setHeader('Location', '/products');
      res.end();
      console.log('Sending Response');
    });
  });
});

app.get("/products", (req, res, next) => {
  res.send(`
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Products</title>
        </head>
        <body>
          <h1>Product list will appear here.</h1>
        </body>
        </html>
      `);
});

app.use((req, res, next) => {
  res.statusCode = 404;
  res.write(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Page Not Found</title>
      </head>
      <body>
        <h1>404 Page Not Found</h1>
      </body>
      </html>
    `);
  res.end();
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});






// const express = require('express');
// const app = express();
// First Middleware
// app.use((req, res, next) => {
//   console.log('First Middleware', req.url, req.method);
//   next();
// });
// Second Middleware (Targeted at /test)
// app.use("/test", (req, res, next) => {
//   console.log('Second Middleware', req.url, req.method);
//   res.send('<h1>Complete Coding</h1>');
// });
// Second Middleware (Targeted at /test)
// app.get("/test", (req, res, next) => {
//   console.log('Second Middleware', req.url, req.method);
//   res.send('<h1>Complete Coding</h1>');
// });
// app.post("/test", (req, res, next) => {
//   console.log('Second Middleware', req.url, req.method);
//   res.send('<h1>Complete Coding</h1>');
// });
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${PORT}`);
// });