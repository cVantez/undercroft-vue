# undercroft-vue

description here

## Project setup
```bash
> npm run init
# if you're running production
> npm i -g forever
```

See output of the init script for tips on runing builds.

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
