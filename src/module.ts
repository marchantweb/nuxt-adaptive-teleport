import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition
export type ModuleOptions = object

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-adaptive-teleport',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    addComponent({
      name: 'AdaptiveTeleport',
      filePath: resolver.resolve('runtime/components/AdaptiveTeleport.vue'),
    })
  },
})
