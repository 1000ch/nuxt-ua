import platform from 'platform';

class PlatformAdopter {
  constructor(platform) {
    this.platform = platform;
  }

  get chrome() {
    return this.platform.name.indexOf('Chrome') !== -1;
  }

  get firefox() {
    return this.platform.name.indexOf('Firefox') !== -1;
  }

  get safari() {
    return this.platform.name.indexOf('Safari') !== -1;
  }

  get android() {
    return this.platform.os.family.indexOf('Android') !== -1;
  }

  get ios() {
    return this.platform.os.family.indexOf('iOS') !== -1;
  }

  get macos() {
    return this.platform.os.family.indexOf('OS X') !== -1;
  }

  get windows() {
    return this.platform.os.family.indexOf('Windows') !== -1;
  }
}

class NuxtUserAgent {
  constructor(platform) {
    this.adopter = new PlatformAdopter(platform);
  }

  get is() {
    return this.adopter;
  }
}

export default (context, inject) => {
  const ua = new NuxtUserAgent(platform);
  context.$ua = ua;
  inject('ua', ua);
}
