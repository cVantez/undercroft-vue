// To avoid committing sensitive information, we must read from a local config.
// Create a file with the indicated name in this directory that exports the appId.

const local = require('#config/fbConfig.local');

module.exports = {
  appId: local.appId || 'abc123'
};
