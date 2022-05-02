// To avoid committing sensitive information, we must read from a local config.
// Create a file with the indicated name in this directory that exports the apiKey.
// Get your own API key here: https://console.cloud.google.com/google/maps-apis/credentials
// $300 free trial / $7 per 1000 page loads / $ 200 free monthly

const local = require('#config/googleConfig.local');

module.exports = {
  apiKey: local.apiKey || 'abc123'
};
