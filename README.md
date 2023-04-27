# Harness for react-native-reanimated work

## Currently trying to reproduce a very subtle bug

It seemed like RNR object sharing across threads was interacting with mobx in wierd ways.
So far I haven't been able to recreate it.

## Environment and tools.

You must have the Java 11, the Android SDK, and Android Studio, installed.

Instructions are [here](https://reactnative.dev/docs/environment-setup)

Android Studio is mostly needed to create an emulator profile and run the emulator. [Like so](https://developer.android.com/studio/run/managing-avds)


## Repo scripts

### `yarn install`

then, any of

### `yarn tcheck` 
runs `tsc`

### `yarn clean` 
deletes `node_modules` (requires a `yarn install` after)

### `yarn start`
runs `tsc`, then runs metro server in emulator in dev mode.

**press 'a'** right after to load android (ios has not been supported / checked)

Subsequently **press 'r'** to reload after changes (if hmr doesn't work)

### `yarn deploy` 
runs `tsc`, then generates and installs a release mode bundle onto the emulator

