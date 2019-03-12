import platform from 'platform';

class PlatformAdopter {
  constructor(platform) {
    this.platform = platform;
  }

  get chrome() {
    const { name } = this.platform;

    if (name) {
      return name.match(/Chrome/) !== null;
    } else {
      return false;
    }
  }

  get firefox() {
    const { name } = this.platform;

    if (name) {
      return name.match(/Firefox/) !== null;
    } else {
      return false;
    }
  }

  get safari() {
    const { name } = this.platform;

    if (name) {
      return name.match(/Safari/) !== null;
    } else {
      return false;
    }
  }

  get ie() {
    const { name } = this.platform;

    if (name) {
      return name.match(/IE/) !== null;
    } else {
      return false;
    }
  }

  get android() {
    const { family } = this.platform.os;

    if (family) {
      return family.match(/Android/) !== null;
    } else {
      return false;
    }
  }

  get ios() {
    const { family } = this.platform.os;

    if (family) {
      return family.match(/iOS/) !== null;
    } else {
      return false;
    }
  }

  get macos() {
    const { family } = this.platform.os;

    if (family) {
      return family.match(/OS X|Darwin/) !== null;
    } else {
      return false;
    }
  }

  get windows() {
    const { family } = this.platform.os;

    if (family) {
      return family.match(/Windows/) !== null;
    } else {
      return false;
    }
  }

  get linux() {
    const { family } = this.platform.os;

    if (family) {
      return family.match(/Ubuntu|Debian|Fedora|Red Hat|SuSE/) !== null;
    } else {
      return false;
    }
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
