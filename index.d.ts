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

declare module 'vue/types/vue' {
  export interface Vue {
    $ua: Platform;
  }
}
