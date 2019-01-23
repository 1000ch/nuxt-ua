import platform from 'platform';

export default (context, inject) => {
  context.$ua = platform;
  inject('ua', platform);
}
