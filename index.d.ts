declare namespace NuxtUserAgent {
  interface OS {
    architecture: string;
    family: string;
    toString(): string;
    version: string;
  }

  interface Platform {
    description: string;
    layout: string;
    manufacturer: string;
    name: string;
    os: OS;
    parse(): Platform;
    prerelease: string;
    product: string;
    toString(): string;
    ua: string;
    version: string;
  }

  interface UserAgent {
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
}

export default NuxtUserAgent;
