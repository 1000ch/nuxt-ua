import Platform from 'platform';

interface NuxtUserAgent {
  readonly platform: Platform;
  readonly is: {
    readonly chrome: boolean;
    readonly firefox: boolean;
    readonly safari: boolean;
    readonly ie: boolean;
    readonly edge: boolean;
    readonly opera: boolean;
    readonly android: boolean;
    readonly ios: boolean;
    readonly macos: boolean;
    readonly windows: boolean;
    readonly linux: boolean;
  };
}

export default NuxtUserAgent;
