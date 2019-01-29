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

interface NuxtUA {
  platform: Platform;
  is: {
    Chrome(): boolean;
    Firefox(): boolean;
    Safari(): boolean;
    Android(): boolean;
    iOS(): boolean;
    macOS(): boolean;
    Windows(): boolean;
  };
}

declare module 'vue/types/vue' {
  export interface Vue {
    $ua: NuxtUA;
  }
}
