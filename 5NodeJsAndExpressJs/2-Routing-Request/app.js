const http = require('http');
const fs = require('fs');

const requestHandler = (req, res) => {
  console.log('Request Received', req.url, req.method);
  res.setHeader('Content-Type', 'text/html');

  if (req.url === "/") {
    res.write(`
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
  } else if (req.url === '/buy-product') { // submit ke baad recevie yahah par deakhega
    console.log("Form data received.");
    const buffer = [];
    req.on('data', (chunk) => {  //data chunk <Buffer 70 72 6f 64 75 63 74 3d 74 6f 70 26 62 75 64 67 65 74 3d 38 30>
      console.log(chunk);
      buffer.push(chunk);
    });
    req.on('end', () => {
      const body = Buffer.concat(buffer).toString();
      console.log(body);
    });

    fs.writeFileSync('buy.txt', 'Myntra app'); // new file banegi  automatically 
    res.statusCode = 302;
    res.setHeader('Location', '/products'); // re direct karege
    console.log('Sending Response');
  
  } else if (req.url === "/products") {
    res.write(`
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
  } else {
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
  }
  res.end();
}

const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${3001}`);
});