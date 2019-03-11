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

export interface NuxtUserAgent {
  platform: Platform;
  is: {
    readonly Chrome: boolean;
    readonly Firefox: boolean;
    readonly Safari: boolean;
    readonly Android: boolean;
    readonly iOS: boolean;
    readonly macOS: boolean;
    readonly Windows: boolean;
  };
}

declare module 'vue/types/vue' {
  export interface Vue {
    $ua: NuxtUserAgent;
  }
}
