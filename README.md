# undercroft-vue

description here

## Project setup
```bash
> npm run init
# if you're running production
> npm i -g forever
```

See output of the init script for tips on runing builds.

### Google Maps Integration

To set up Google Maps integration:

1. Set up a [Google Cloud project](https://console.cloud.google.com/home/).
1. Under APIs & Services > Enabled APIs & Services, make sure "Maps JavaScript API" and "Places API"
   are enabled. These services cost a total of $24 per 1000 page loads ($7 maps + $17 places).
   You start with $300 credit for your free trial, and then get $200 montly credit after that.
1. Under Credentials > Create Credentials click "API key".
1. Create a file called `server/config/googleConfig.local.js`:
    ```js
    module.exports = {
      apiKey: 'your-google-api-key'
    };
    ```

### Facebook Integration

To set up Facebook integration:

1. Set up a [Facebook developer account](https://developers.facebook.com/).
1. Click "Get Started" and follow the instructions (choose "Developer" at the end).
1. Click "Create App" and follow the instructions.
1. Copy the App ID near the top left corner of the dashboard.
1. Create a file called `server/config/fbConfig.local.js`:
    ```js
    module.exports = {
      appId: 'your-fb-app-id'
    };
    ```

### SSL Integration

If you want to enable SSL connection:

1. Have a [CA Bundle](https://curl.se/docs/caextract.html) on your server in `.crt` format.
1. [Create a server certificate](https://linuxize.com/post/creating-a-self-signed-ssl-certificate/).
   Make sure the name on the certificate and the name of the file itself match the FQDN of your server.
1. Update the fields in `server/config/sslConfig.js`.
1. Create a file called  `server/config/sslConfig.local.js`:
    ```js
    module.exports = {
      passphrase: 'base-64-encoded-passphrase-for-hostename.p12'
    };
    ```
1. Uncomment the appropriate lines in `server/index.js`.

## Linting

Both root and client have lint scripts

```bash
> npm run lint
```

Please make sure these complete with no errors before submitting a PR.

## VSCode Config

If VSCode isn't already set up for JS/Vue you'll want to do the following:

1. Install the `dbaeumer.ESLint` extension.
2. Install the `octref.Vetur` extension.
3. Add the following to your `settings.json`:

    ```json
    "eslint.format.enable": true,
    "eslint.validate": [
      "javascript",
      "vue"
    ],
    "vetur.validation.template": false,
    "[javascript]": {
      "editor.tabSize": 2,
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "[vue]": {
      "editor.tabSize": 2,
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    }
    ```
