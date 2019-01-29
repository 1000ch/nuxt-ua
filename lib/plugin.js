import platform from 'platform';

class Detector {
  constructor(platform) {
    this.platform = platform;
  }

  get Chrome() {
    return this.platform.name.indexOf('Chrome') !== -1;
  }

  get Firefox() {
    return this.platform.name.indexOf('Firefox') !== -1;
  }

  get Safari() {
    return this.platform.name.indexOf('Safari') !== -1;
  }

  get Android() {
    return this.platform.os.family.indexOf('Android') !== -1;
  }

  get iOS() {
    return this.platform.os.family.indexOf('iOS') !== -1;
  }

  get macOS() {
    return this.platform.os.family.indexOf('Darwin') !== -1;
  }

  get Windows() {
    return this.platform.os.family.indexOf('Windows') !== -1;
  }
}

class NuxtUA {
  constructor(platform) {
    this.platform = platform;
    this.detector = new Detector(platform);
  }

  get is() {
    return this.detector;
  }
}

export default (context, inject) => {
  const ua = new NuxtUA(platform);
  context.$ua = ua;
  inject('ua', ua);
}
