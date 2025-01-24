// Load the dotenv package
require('dotenv').config();

// Access environment variables
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true',
};

// Export the config object for use in other parts of the application
module.exports = config;

// Log the variables for testing (optional, remove this in production)
console.log("Environment Configuration:", config);