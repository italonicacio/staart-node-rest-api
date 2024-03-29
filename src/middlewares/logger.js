const logRequest = (log = console.log) => (req, res, next) => {
  log({
    url: req.url,
    method: req.method,
    headers: req.headers,
    body: req.body,
  })

  next()
}

module.exports = logRequest