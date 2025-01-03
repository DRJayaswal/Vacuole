const Dotenv = require('dotenv-webpack');

module.exports = {
  // ...existing code...
  plugins: [
    new Dotenv()
    // ...existing plugins...
  ],
  // ...existing code...
};
