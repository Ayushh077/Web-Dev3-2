function logger(req, res, next) {
  const currentTime = new Date().toLocaleString();
  console.log(currentTime + " - " + req.method + " request to " + req.url);
  next(); 
}

module.exports = logger;
