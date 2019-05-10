# example-tsunit

tsunit example with webpack + typescript + vue

<h2 align="center">Compile</h2>

- download source code
- `cd "yourPath/example-tsunit/"`
- `npm install`
- `npm run dev`

<h2 align="center">construction</h2>

```ts
example-tsunit/
|- /src/
   |- components
      |- Aaa.vue       // component need to test
   |- /test/
      |- test.ts       // test entry
      |- BllTest.ts    // one test file
      |- TestView.vue  // ui test file
   |- App.vue          // index main components
   |- MainHome.ts      // index page entry
|- /vbuild/            // webpack config file
|- index.html          // main page
|- test.html           // test page
...
```

## config

tsconfig.json
```js
{
    "compilerOptions": {
        "sourceMap": true,
        "experimentalDecorators": true,
    }
    ...
}
```

webpack dev config

ignore the config in `production` mode

```js
{
    entry: {
        test: "./src/test/test.ts",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "../dist/web/test.html"),
            template: "test.html",
            inject: true,
            chunks: ['manifest', 'polyfill', 'vendors', 'test']
        })
    ]
    ...
}
```
