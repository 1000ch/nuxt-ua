import platform from 'platform';

class PlatformAdopter {
  constructor(platform) {
    this.platform = platform;
  }

  get chrome() {
    const { name } = this.platform;

    if (name) {
      return name.match(/Chrome|Chrome\sMobile/) !== null;
    } else {
      return false;
    }
  }

  get firefox() {
    const { name } = this.platform;

    if (name) {
      return name.match(/Firefox|Firefox\sMobile|Firefox\sfor\siOS/) !== null;
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

  get edge() {
    const { name } = this.platform;

    if (name) {
      return name.match(/Microsoft\sEdge/) !== null;
    } else {
      return false;
    }
  }

  get opera() {
    const { name } = this.platform;

    if (name) {
      return name.match(/Opera/) !== null;
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
      return family.match(/Ubuntu|Debian|Fedora|Red Hat|SuSE|Gentoo|i686/) !== null;
    } else {
      return false;
    }
  }
}

class NuxtUserAgent {
  constructor(platform) {
    this.adopter = new PlatformAdopter(platform);
  }

  get platform() {
    return this.adopter.platform;
  }

  get is() {
    return this.adopter;
  }
}

function nuxtUserAgentFactory(context) {
  const isBrowser = typeof window !== 'undefined';
  const isGenerate = process.static && process.server;
  let userAgent = '';

  if (isBrowser) {
    userAgent = navigator.userAgent;
  } else if (!isGenerate) {
    userAgent = context.req.headers['user-agent'];
  }

  return new NuxtUserAgent(platform.parse(userAgent));
}

export default (context, inject) => {
  const ua = nuxtUserAgentFactory(context);
  context.$ua = ua;
  inject('ua', ua);
}
