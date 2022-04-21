const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const log4js = require('log4js');
const favicon = require('serve-favicon');

const app = express();
const env = process.env.NODE_ENV;

// set up logging
log4js.configure(path.resolve(__dirname, `config/log4js/${env}.json`));
const logOpts = {};
if (env === 'development') {
  logOpts.format = ':method :url :status :content-length - :response-time ms';
}

// security middleware
app.use(helmet());
app.use(cors());

// server logs
app.use(log4js.connectLogger(log4js.getLogger('http'), logOpts));

// handle requests with JSON body
app.use(express.json());

// load generated website files
app.use(favicon(path.resolve(__dirname, 'public/favicon.ico')));
app.use(express.static(path.resolve(__dirname, 'public')));

const port = process.env.PORT || 3000;
const log = log4js.getLogger('express');

// starts server
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
  log.info(`Server started on port ${port}`);
});
