import platform from 'platform';
import { PlatformAdopter, Platform } from './adopter';

export class NuxtUserAgent {
  adopter: PlatformAdopter;

  constructor (ua: string) {
    this.adopter = new PlatformAdopter(platform.parse(ua));
  }

  get platform (): Platform {
    return this.adopter.platform;
  }

  get is () {
    return this.adopter;
  }
}
