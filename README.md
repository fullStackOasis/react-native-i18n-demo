## React Native i18n Demo

Uses https://www.npmjs.com/package/react-native-i18n

This demo was started using the default React Native app, using `npx react-native init ReactNativeI18n`. Then `react-native-i18n` was added.

```
npm install react-native-i18n --save
```

"After installing the npm package you need to link the native modules"

```
react-native link
```

After getting projects set up, you can run the app in the Android Emulator by doing these steps:

```
# For example:
emulator -avd Galaxy_Nexus_API_28
```

And in another terminal window do:

```
cd ~/Projects/ReactNativeI18n
# Install
npx react-native run-android
# Hot reloads
npm start
```

Then just follow the "usage" examples on the above website. You have to set the locale in your app:

```
I18n.locale = 'fr';
```

See screenshot using the emulator on my computer, with `i18n.js` using these two lines:
```
I18n.defaultLocale = "fr";
I18n.locale = "fr";
```
to force the app to use French.

![React Native i18n demo](https://github.com/fullStackOasis/react-native-i18n-demo/raw/master/react-native-i18n-demo.png)

Here's a screenshot taken of the app running in an Android device in the Netherlands. `I18n.fallbacks` is set to true, so that 'nl' is sufficient, and neither 'nl-NL' nor 'nl-BE' are required. Notice that some strings have not been translated into Dutch. Those lines are still hard-coded in English, as in the original project.

![React Native i18n demo on device in NL](https://github.com/fullStackOasis/react-native-i18n-demo/raw/master/react-native-i18n-demo-nl.png)

## Snapshot tests using jest

The test framework, `jest` comes installed when using `npx react-native init`.

This project uses [snapshot testing](https://jestjs.io/docs/en/snapshot-testing).

Create your test, e.g. named `App-i18n-test.js`, and save this file in the `__tests__` directory.

Then, standing in the root of your project, create your initial snapshot by running `npm run test App-i18n-test.js`. Snapshots should be stored in `__tests__/__snapshots__/`.

You can run the full suite of tests like this:

```
npm test

> ReactNativeI18n@0.0.1 test /home/fullstackdev/Projects/ReactNativeI18n
> jest

 PASS  __tests__/LocalizedHeader-i18n-test.js
  ● Console

    console.warn node_modules/react-native-i18n/index.js:11
      react-native-i18n module is not correctly linked

 PASS  __tests__/App-i18n-test.js
  ● Console

    console.warn node_modules/react-native-i18n/index.js:11
      react-native-i18n module is not correctly linked


Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   4 passed, 4 total
Time:        1.542s, estimated 2s
Ran all test suites.
```

You can also run individual tests, like this:

```
~/Projects/ReactNativeI18n$ npm run test App-i18n-test.js

> ReactNativeI18n@0.0.1 test /home/fullstackdev/Projects/ReactNativeI18n
> jest "App-i18n-test.js"

 PASS  __tests__/App-i18n-test.js
  ✓ LocalizedHeader renders strings in French (154ms)

 › 1 snapshot written.
  console.warn node_modules/react-native-i18n/index.js:11
    react-native-i18n module is not correctly linked

Snapshot Summary
 › 1 snapshot written from 1 test suite.

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 written, 1 total
Time:        1.112s, estimated 2s
Ran all test suites matching /App-i18n-test.js/i.
```

### Detox tests

Install [detox](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md)

[See documentation for complete details about the config file](https://github.com/wix/Detox/blob/master/docs/APIRef.Configuration.md).

Run in android dir: `./gradlew assembleAndroidTest`
Run `detox test --configuration android.emu.release`


