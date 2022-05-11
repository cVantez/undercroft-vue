const { apiKey } = require('#config/googleConfig');
const { appId } = require('#config/fbConfig');

module.exports = {
  fb: 'https://www.facebook.com/undercroftmd',
  insta: 'https://www.instagram.com/undercroftmd',

  rwFb: 'https://www.facebook.com/RedWagonBaltimore',
  rwInsta: 'https://www.instagram.com/redwagonbaltimore',

  // TODO: replace this with a working link
  donate: 'https://charity.gofundme.com/o/en/campaign/the-undercroft',

  googleKey: apiKey,
  fbAppId: appId
};
