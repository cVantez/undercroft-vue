// To avoid committing sensitive information, we must read from a local config.
// Create a file with the indicated name in this directory that exports the passphrase.
// Make sure to give the file 600 permissions, and base64-encode the passphrase.

const local = require('#config/sslConfig.local');

const hostname = process.env.HOSTNAME;
const passphrase = local.passphrase ? Buffer.form(local.passphrase, 'base64').toString('utf8') : hostname;

module.exports = {
  ca: '/path/to/your/certificate/authorities/bundle.crt',
  pfx: `/path/to/${hostname}.p12`,
  passphrase
};
