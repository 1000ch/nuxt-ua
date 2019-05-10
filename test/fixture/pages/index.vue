<template>
  <div>
    <p class="value">{{ $ua.value }}</p>
    <p class="chrome">{{ $ua.is.chrome }}</p>
    <p class="firefox">{{ $ua.is.firefox }}</p>
    <p class="safari">{{ $ua.is.safari }}</p>
    <p class="ie">{{ $ua.is.ie }}</p>
    <p class="edge">{{ $ua.is.edge }}</p>
    <p class="opera">{{ $ua.is.opera }}</p>
    <p class="android">{{ $ua.is.android }}</p>
    <p class="ios">{{ $ua.is.ios }}</p>
    <p class="macos">{{ $ua.is.macos }}</p>
    <p class="windows">{{ $ua.is.windows }}</p>
    <p class="linux">{{ $ua.is.linux }}</p>
  </div>
</template>
