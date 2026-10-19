# iOS

识光 iOS app.

## Build

- `yarn install`
- `BUILD_TYPE=canary PUBLIC_PATH="/" yarn affine @lumibook/ios build`
- `yarn affine @lumibook/ios cap sync`
- `yarn affine @lumibook/ios cap open ios`

## Live Reload

> Capacitor doc: https://capacitorjs.com/docs/guides/live-reload#using-with-framework-clis

- `yarn install`
- `yarn dev`
  - select `ios` for the "Distribution" option
- `yarn affine @lumibook/ios sync:dev`
- `yarn affine @lumibook/ios cap open ios`
