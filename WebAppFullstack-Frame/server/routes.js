module.exports = function(app) {
  // Insert routes below
  app.use('/api/thing', require('./api/thing'));
  app.use('/api/auth', require('./api/auth'));
}
