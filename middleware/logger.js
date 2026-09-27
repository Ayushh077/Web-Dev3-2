// Custom Logger Middleware
// This function runs on EVERY request and just prints info to the console

function logger(req, res, next) {
  const currentTime = new Date().toLocaleString();
  console.log(currentTime + " - " + req.method + " request to " + req.url);
  next(); // don't forget this! it lets the request move to the next step
}

module.exports = logger;