// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    target: 'static',
    srcDir: 'src',
    modules: ['@nuxtjs/tailwindcss'],
    generate: {
        dir: 'my-site'
    }
})
