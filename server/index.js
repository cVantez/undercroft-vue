const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const log4js = require('log4js');

const env = process.env.NODE_ENV;
const app = express();

// set up logging
log4js.configure(path.resolve(__dirname, `config/log4js/${env}.json`));
const logOpts = {};
if (env === 'development') {
  logOpts.format = ':method :url :status :content-length - :response-time ms';
}

const log = log4js.getLogger('express');

app.use(helmet());
app.use(cors());
app.use(log4js.connectLogger(log4js.getLogger('http'), logOpts));
app.use(express.json());

const port = process.env.PORT || 3000;

// starts server
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
  log.info(`Server started on port ${port}`);
});
