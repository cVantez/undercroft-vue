const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const log4js = require('log4js');
const favicon = require('serve-favicon');
const history = require('connect-history-api-fallback');
// const fs = require('fs');
// const https = require('https');

const metaRouter = require('#routes/api/meta');
// const { ca, pfx, passphrase } = require('./config/sslConfig');

const app = express();
const env = process.env.NODE_ENV;

// set up logging
log4js.configure(path.resolve(__dirname, `config/log4js/${env}.json`));
const logOpts = {};
if (env === 'development') {
  logOpts.format = ':method :url :status :content-length - :response-time ms';
}
const log = log4js.getLogger('express');

// security middleware
app.use(helmet(
  {
    contentSecurityPolicy: {
      directives: {
        'default-src': ["'self'", 'maps.googleapis.com'],
        'script-src': ["'self'", 'maps.googleapis.com'],
        'img-src': ["'self'", 'data:', 'maps.googleapis.com', 'maps.gstatic.com'],
      }
    },
    // TODO: seem to need this for google maps. is this safe?
    crossOriginEmbedderPolicy: false
  }
));
app.use(cors());
// app.use(cors({ credentials: true }));

// server logs
app.use(log4js.connectLogger(log4js.getLogger('http'), logOpts));

// handle requests with JSON body
app.use(express.json());

// back end routing
app.use('/api/meta', metaRouter);

// browser history
app.use(history({
  index: '/index.html'
}));

// load generated website files
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(favicon(path.resolve(__dirname, 'public/images/tide.png')));

// error handling
app.use((err, req, res, next) => {
  log.error(err);
  res.status(500).send(err.message);
});

// starts server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
  log.info(`Server started on port ${port}`);
});

// const options = {
//   minVersion: 'TLSv1.2',
//   requestCert: true,
//   ca: fs.readFileSync(ca),
//   pfx: fs.readFileSync(pfx),
//   passphrase
// };

// // start https server
// const server = https.createServer(options, app);
// server.listen(port);
// server.on('listening', () => {
//   console.log(`Server is running at ${port}`);
//   log.info(`Server started on port ${port}`);
// });
