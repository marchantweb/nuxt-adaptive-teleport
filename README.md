# Nuxt Adaptive Teleport

[![Nuxt][nuxt-src]][nuxt-href]

`<AdaptiveTeleport>` works similarly to Vue's built-in `<Teleport>` component, but with the added benefit of being able to adapt to route changes, so it can persist children across pages without needing to re-mount them.

It works by using a `watch` on the route, as well as a Mutation Observer on the CSS selector for the teleport target, to know when to "refresh" the teleport instance.

The most common use case for this is for large, complex components that take a long time to mount, but that need to be within the page DOM of multiple pages. By using `<AdaptiveTeleport>`, you can ensure that the component is only mounted once, and is simply moved around the DOM you navigate between pages.

- [Release Notes / Changelog](/CHANGELOG.md)

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-adaptive-teleport
```

## Usage

The `<AdaptiveTeleport>` component can be used in your layouts, or in `app.vue` - anywhere above the `<NuxtPage>` component.On each page where you want to display the component, you drop in an element DOM element with your choice of ID.

```vue
<!-- app.vue -->
<template>
  
  <!-- Choose a CSS selector to place the component -->
  <AdaptiveTeleport to="#my-target">
    <MyComponent>
  </AdaptiveTeleport>
  
    <!-- AdaptiveTeleport needs to reside above the NuxtPage component -->
  <NuxtPage />
</template>

<!--my-page-1.vue-->
<template>
  <div id="my-target">
    <!-- The component will render here -->
  </div>
</template>

<!--my-page-2.vue-->
<template>
  <div id="my-target">
    <!-- If you navigate here, it will continue to render without re-mounting -->
  </div>
</template>

<!--my-page-3.vue-->
<template>
    <!-- If your page doesn't include the target, it will be hidden (still mounted) -->
</template>
```


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
