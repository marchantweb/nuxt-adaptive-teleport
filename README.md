# Nuxt Adaptive Teleport

[![Nuxt][nuxt-src]][nuxt-href]

`<AdaptiveTeleport>` is a variation of Vue's `<Teleport>` component that adapts to route changes in `<NuxtPage>`. It works by using a `watch` on the route, as well as a Mutation Observer on the CSS selector for the teleport target, to know when to "refresh" the teleport instance.

- [Release Notes / Changelog](/CHANGELOG.md)

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-adaptive-teleport
```

That's it! You can now use Nuxt Adaptive Teleport in your Nuxt app ✨


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-adaptive-teleport/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-adaptive-teleport

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-adaptive-teleport.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-adaptive-teleport

[license-src]: https://img.shields.io/npm/l/nuxt-adaptive-teleport.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-adaptive-teleport

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
